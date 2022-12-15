import sqlite3

def new_user(name, email):
    with sqlite3.connect("blog.db") as conn:
        cursor = conn.cursor()
        cursor.execute(f"INSERT INTO users (name, email) VALUES ('{name}', '{email}');")
        results = cursor.fetchall()
        print(results)
        return results

def postting():
    with sqlite3.connect("blog.db") as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM post;")
        results = cursor.fetchall()
        print(results)
        return results

def new_post(title, description):
    with sqlite3.connect("blog.db") as conn:
        cursor = conn.cursor()
        cursor.execute(f"INSERT INTO post (title, description) VALUES ('{title}','{description}');")
        results = cursor.fetchall()
        print(results)
        return results

def update_post(title, description):
    with sqlite3.connect("blog.db") as conn:
        cursor = conn.cursor()
        cursor.execute(f"INSERT INTO post (title, description) VALUES ('{title}','{description}');")
        results = cursor.fetchall()
        print(results)
        return results



if __name__ == "__main__":
    new_user()
    postting()
    new_post()
    update_post()