import os
import random 
import re

def create_files(dir):
    ruta_base = os.path.join(os.getcwd(), dir)

    if not os.path.exists(ruta_base):
        os.mkdir(ruta_base)

    # Crear index.html
    with open(os.path.join(ruta_base, 'index.html'), "w"):
        pass

    # Crear carpeta css
    ruta_css = os.path.join(ruta_base, 'css')
    os.mkdir(ruta_css)
    print(ruta_css)
    print(os.path.join(ruta_css, 'style.css'))
    with open(os.path.join(ruta_css, 'style.css'), "w"):
        pass

    # Crear carpeta media
    ruta_media = os.path.join(ruta_base, 'media')
    os.mkdir(ruta_media)

    
def create_dirs():
    ext = ["auto.py", "README.md", ".git"]
    content = os.listdir()
    
    dirs = [dir for dir in content 
            if not (dir == ext[0] or dir == ext[1] or dir == ext[2])]
    new_dir = f"tarea{len(dirs)}"
    os.mkdir(new_dir)  
    
    create_files(new_dir)
        
if __name__ == "__main__":
    create_dirs()