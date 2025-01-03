import mysql.connector
from mysql.connector import Error
from typing import Optional, List, Dict, Any

class DatabaseManager:
    def __init__(self, host: str, user: str, password: str, database: str):
        """Initialize database connection"""
        self.connection_params = {
            'host': host,
            'user': user,
            'password': password,
            'database': database
        }
        self.connection = None
        
    def connect(self):
        """Create database connection"""
        try:
            self.connection = mysql.connector.connect(**self.connection_params)
            print("Successfully connected to the database")
        except Error as e:
            print(f"Error connecting to MySQL: {e}")
            
    def disconnect(self):
        """Close database connection"""
        if self.connection and self.connection.is_connected():
            self.connection.close()
            print("Database connection closed")

class CategoryManager:
    def __init__(self, db_manager: DatabaseManager):
        self.db_manager = db_manager

    def create(self, name: str, parent_category_id: Optional[int] = None) -> bool:
        """Create a new category"""
        try:
            cursor = self.db_manager.connection.cursor()
            query = """
                INSERT INTO category (name, parentCategoryId)
                VALUES (%s, %s)
            """
            cursor.execute(query, (name, parent_category_id))
            self.db_manager.connection.commit()
            print(f"Successfully created category: {name}")
            return True
        except Error as e:
            print(f"Error creating category: {e}")
            return False
        finally:
            cursor.close()

    def read(self, category_id: Optional[int] = None) -> List[Dict[str, Any]]:
        """Read category/categories"""
        try:
            cursor = self.db_manager.connection.cursor(dictionary=True)
            if category_id:
                query = "SELECT * FROM category WHERE id = %s"
                cursor.execute(query, (category_id,))
            else:
                query = "SELECT * FROM category"
                cursor.execute(query)
            
            result = cursor.fetchall()
            return result
        except Error as e:
            print(f"Error reading categories: {e}")
            return []
        finally:
            cursor.close()

    def update(self, category_id: int, name: Optional[str] = None, 
               parent_category_id: Optional[int] = None) -> bool:
        """Update a category"""
        try:
            cursor = self.db_manager.connection.cursor()
            updates = []
            params = []
            
            if name:
                updates.append("name = %s")
                params.append(name)
            if parent_category_id is not None:
                updates.append("parentCategoryId = %s")
                params.append(parent_category_id)
                
            if not updates:
                return False
                
            query = f"""
                UPDATE category 
                SET {', '.join(updates)}
                WHERE id = %s
            """
            params.append(category_id)
            
            cursor.execute(query, params)
            self.db_manager.connection.commit()
            print(f"Successfully updated category ID: {category_id}")
            return True
        except Error as e:
            print(f"Error updating category: {e}")
            return False
        finally:
            cursor.close()

    def delete(self, category_id: int) -> bool:
        """Delete a category"""
        try:
            cursor = self.db_manager.connection.cursor()
            query = "DELETE FROM category WHERE id = %s"
            cursor.execute(query, (category_id,))
            self.db_manager.connection.commit()
            print(f"Successfully deleted category ID: {category_id}")
            return True
        except Error as e:
            print(f"Error deleting category: {e}")
            return False
        finally:
            cursor.close()

class RoleManager:
    def __init__(self, db_manager: DatabaseManager):
        self.db_manager = db_manager

    def create(self, name: str) -> bool:
        """Create a new role"""
        try:
            cursor = self.db_manager.connection.cursor()
            query = "INSERT INTO role (name) VALUES (%s)"
            cursor.execute(query, (name,))
            self.db_manager.connection.commit()
            print(f"Successfully created role: {name}")
            return True
        except Error as e:
            print(f"Error creating role: {e}")
            return False
        finally:
            cursor.close()

    def read(self, role_id: Optional[int] = None) -> List[Dict[str, Any]]:
        """Read role/roles"""
        try:
            cursor = self.db_manager.connection.cursor(dictionary=True)
            if role_id:
                query = "SELECT * FROM role WHERE id = %s"
                cursor.execute(query, (role_id,))
            else:
                query = "SELECT * FROM role"
                cursor.execute(query)
            
            result = cursor.fetchall()
            return result
        except Error as e:
            print(f"Error reading roles: {e}")
            return []
        finally:
            cursor.close()

    def update(self, role_id: int, name: str) -> bool:
        """Update a role"""
        try:
            cursor = self.db_manager.connection.cursor()
            query = "UPDATE role SET name = %s WHERE id = %s"
            cursor.execute(query, (name, role_id))
            self.db_manager.connection.commit()
            print(f"Successfully updated role ID: {role_id}")
            return True
        except Error as e:
            print(f"Error updating role: {e}")
            return False
        finally:
            cursor.close()

    def delete(self, role_id: int) -> bool:
        """Delete a role"""
        try:
            cursor = self.db_manager.connection.cursor()
            query = "DELETE FROM role WHERE id = %s"
            cursor.execute(query, (role_id,))
            self.db_manager.connection.commit()
            print(f"Successfully deleted role ID: {role_id}")
            return True
        except Error as e:
            print(f"Error deleting role: {e}")
            return False
        finally:
            cursor.close()
