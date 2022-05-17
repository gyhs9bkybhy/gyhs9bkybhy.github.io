import os
import json
from PIL import Image
from wand.image import Image as wImage
from PIL import Image
 

def change_resolution(image_path, resolution= (2000, 2000)):
    img = Image.open(image_path)
    x, y = img.size
    changex = float(x) / resolution[0]
    changey = float(y) / resolution[1]
    change = max(changex, changey)
    # 判断分辨率是否满足
    if change > 1:
        img.resize((int(x / change), int(y / change))).save(image_path)

def convert_format(path = 'images/share with me//'):
    file_lst = os.listdir(path)
    for file in file_lst:
        if file.split('.')[-1] == 'downloading':
            os.remove(f"{path}{file}")
        elif file.split('.')[-1] == 'heic':
            img = wImage(filename=f"{path}{file}")
            img.format='jpg'
            img.save(filename=f"{path}{file[:-5]}.jpg")
            img.close()
            os.remove(f"{path}{file}")
            file = f"{file[:-5]}.jpg"

                    
        change_resolution(f"{path}{file}")


def make_json(path= 'images/share with me//'):
    
    file_lst = os.listdir(path)
    json_lst = []
    for file in file_lst:
        if file.split('.')[-1] == 'heic':
            continue
        img = Image.open(f"{path}{file}")
        x, y = img.size
        change = y/500

        json_dict={
            "small": f"{path}{file}",
            "middle": f"{path}{file}",
            "small_width": int(x/change),
            "small_height": 500,
            "middle_width": x,
            "middle_height": y,
            "desc": file,
            "type": "1",
            "name": file,
            "id": file
        }
        json_lst.append(json_dict)
    

    with open("js/image_json.js", 'a') as outfile:
            outfile.write("var image_json = ")
            outfile.write(json.dumps(json_lst))
            outfile.write('\n')
            outfile.close()

#convert_format()
make_json()