// cyclistic.js (for frontend)

// This file contains metadata — not raw Python code

const cyclistic = {
  cleaning: `
-- The Driver Drowsiness Detection System is a computer vision-based safety application designed to monitor a driver’s alertness in real time.

-- Key features:
- Real-time face and eye detection using Haar Cascades
- Eye Aspect Ratio (EAR) to detect prolonged eye closure
- Live webcam feed processing with OpenCV
- Instant alarm system when drowsiness is detected
- Easy to integrate into vehicle safety modules

-- Technologies: Python, OpenCV, PyTorch, YOLOv5

import torch
import matplotlib.pyplot as plt
import numpy as np
import cv2
Loading Model from pytorch
model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)
YOLOv5  2023-12-3 Python-3.11.3 torch-2.1.1+cu121 CUDA:0 (NVIDIA GeForce GTX 1650 Ti, 4096MiB)

Fusing layers... 
YOLOv5s summary: 213 layers, 7225885 parameters, 0 gradients, 16.4 GFLOPs
Adding AutoShape... 
model
AutoShape(
  (model): DetectMultiBackend(
    (model): DetectionModel(
      (model): Sequential(
        (0): Conv(
          (conv): Conv2d(3, 32, kernel_size=(6, 6), stride=(2, 2), padding=(2, 2))
          (act): SiLU(inplace=True)
        )
        (1): Conv(
          (conv): Conv2d(32, 64, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1))
          (act): SiLU(inplace=True)
        )
        (2): C3(
          (cv1): Conv(
            (conv): Conv2d(64, 32, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv2): Conv(
            (conv): Conv2d(64, 32, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv3): Conv(
            (conv): Conv2d(64, 64, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (m): Sequential(
            (0): Bottleneck(
              (cv1): Conv(
                (conv): Conv2d(32, 32, kernel_size=(1, 1), stride=(1, 1))
                (act): SiLU(inplace=True)
              )
              (cv2): Conv(
                (conv): Conv2d(32, 32, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
                (act): SiLU(inplace=True)
              )
            )
          )
        )
        (3): Conv(
          (conv): Conv2d(64, 128, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1))
          (act): SiLU(inplace=True)
        )
        (4): C3(
          (cv1): Conv(
            (conv): Conv2d(128, 64, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv2): Conv(
            (conv): Conv2d(128, 64, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv3): Conv(
            (conv): Conv2d(128, 128, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (m): Sequential(
            (0): Bottleneck(
              (cv1): Conv(
                (conv): Conv2d(64, 64, kernel_size=(1, 1), stride=(1, 1))
                (act): SiLU(inplace=True)
              )
              (cv2): Conv(
                (conv): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
                (act): SiLU(inplace=True)
              )
            )
            (1): Bottleneck(
              (cv1): Conv(
                (conv): Conv2d(64, 64, kernel_size=(1, 1), stride=(1, 1))
                (act): SiLU(inplace=True)
              )
              (cv2): Conv(
                (conv): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
                (act): SiLU(inplace=True)
              )
            )
          )
        )
        (5): Conv(
          (conv): Conv2d(128, 256, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1))
          (act): SiLU(inplace=True)
        )
        (6): C3(
          (cv1): Conv(
            (conv): Conv2d(256, 128, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv2): Conv(
            (conv): Conv2d(256, 128, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv3): Conv(
            (conv): Conv2d(256, 256, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (m): Sequential(
            (0): Bottleneck(
              (cv1): Conv(
                (conv): Conv2d(128, 128, kernel_size=(1, 1), stride=(1, 1))
                (act): SiLU(inplace=True)
              )
              (cv2): Conv(
                (conv): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
                (act): SiLU(inplace=True)
              )
            )
            (1): Bottleneck(
              (cv1): Conv(
                (conv): Conv2d(128, 128, kernel_size=(1, 1), stride=(1, 1))
                (act): SiLU(inplace=True)
              )
              (cv2): Conv(
                (conv): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
                (act): SiLU(inplace=True)
              )
            )
            (2): Bottleneck(
              (cv1): Conv(
                (conv): Conv2d(128, 128, kernel_size=(1, 1), stride=(1, 1))
                (act): SiLU(inplace=True)
              )
              (cv2): Conv(
                (conv): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
                (act): SiLU(inplace=True)
              )
            )
          )
        )
        (7): Conv(
          (conv): Conv2d(256, 512, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1))
          (act): SiLU(inplace=True)
        )
        (8): C3(
          (cv1): Conv(
            (conv): Conv2d(512, 256, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv2): Conv(
            (conv): Conv2d(512, 256, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv3): Conv(
            (conv): Conv2d(512, 512, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (m): Sequential(
            (0): Bottleneck(
              (cv1): Conv(
                (conv): Conv2d(256, 256, kernel_size=(1, 1), stride=(1, 1))
                (act): SiLU(inplace=True)
              )
              (cv2): Conv(
                (conv): Conv2d(256, 256, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
                (act): SiLU(inplace=True)
              )
            )
          )
        )
        (9): SPPF(
          (cv1): Conv(
            (conv): Conv2d(512, 256, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv2): Conv(
            (conv): Conv2d(1024, 512, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (m): MaxPool2d(kernel_size=5, stride=1, padding=2, dilation=1, ceil_mode=False)
        )
        (10): Conv(
          (conv): Conv2d(512, 256, kernel_size=(1, 1), stride=(1, 1))
          (act): SiLU(inplace=True)
        )
        (11): Upsample(scale_factor=2.0, mode='nearest')
        (12): Concat()
        (13): C3(
          (cv1): Conv(
            (conv): Conv2d(512, 128, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv2): Conv(
            (conv): Conv2d(512, 128, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv3): Conv(
            (conv): Conv2d(256, 256, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (m): Sequential(
            (0): Bottleneck(
              (cv1): Conv(
                (conv): Conv2d(128, 128, kernel_size=(1, 1), stride=(1, 1))
                (act): SiLU(inplace=True)
              )
              (cv2): Conv(
                (conv): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
                (act): SiLU(inplace=True)
              )
            )
          )
        )
        (14): Conv(
          (conv): Conv2d(256, 128, kernel_size=(1, 1), stride=(1, 1))
          (act): SiLU(inplace=True)
        )
        (15): Upsample(scale_factor=2.0, mode='nearest')
        (16): Concat()
        (17): C3(
          (cv1): Conv(
            (conv): Conv2d(256, 64, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv2): Conv(
            (conv): Conv2d(256, 64, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv3): Conv(
            (conv): Conv2d(128, 128, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (m): Sequential(
            (0): Bottleneck(
              (cv1): Conv(
                (conv): Conv2d(64, 64, kernel_size=(1, 1), stride=(1, 1))
                (act): SiLU(inplace=True)
              )
              (cv2): Conv(
                (conv): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
                (act): SiLU(inplace=True)
              )
            )
          )
        )
        (18): Conv(
          (conv): Conv2d(128, 128, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1))
          (act): SiLU(inplace=True)
        )
        (19): Concat()
        (20): C3(
          (cv1): Conv(
            (conv): Conv2d(256, 128, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv2): Conv(
            (conv): Conv2d(256, 128, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv3): Conv(
            (conv): Conv2d(256, 256, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (m): Sequential(
            (0): Bottleneck(
              (cv1): Conv(
                (conv): Conv2d(128, 128, kernel_size=(1, 1), stride=(1, 1))
                (act): SiLU(inplace=True)
              )
              (cv2): Conv(
                (conv): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
                (act): SiLU(inplace=True)
              )
            )
          )
        )
        (21): Conv(
          (conv): Conv2d(256, 256, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1))
          (act): SiLU(inplace=True)
        )
        (22): Concat()
        (23): C3(
          (cv1): Conv(
            (conv): Conv2d(512, 256, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv2): Conv(
            (conv): Conv2d(512, 256, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (cv3): Conv(
            (conv): Conv2d(512, 512, kernel_size=(1, 1), stride=(1, 1))
            (act): SiLU(inplace=True)
          )
          (m): Sequential(
            (0): Bottleneck(
              (cv1): Conv(
                (conv): Conv2d(256, 256, kernel_size=(1, 1), stride=(1, 1))
                (act): SiLU(inplace=True)
              )
              (cv2): Conv(
                (conv): Conv2d(256, 256, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
                (act): SiLU(inplace=True)
              )
            )
          )
        )
        (24): Detect(
          (m): ModuleList(
            (0): Conv2d(128, 255, kernel_size=(1, 1), stride=(1, 1))
            (1): Conv2d(256, 255, kernel_size=(1, 1), stride=(1, 1))
            (2): Conv2d(512, 255, kernel_size=(1, 1), stride=(1, 1))
          )
        )
      )
    )
  )
)
Testing the Model
img = 'https://assets-global.website-files.com/595d6b420002832258c527cb/618abc9cdfbae01bc36d2ce5_hero_advanced_drowsiness.jpg'
results = model(img)
results.print()
image 1/1: 1075x2000 1 person, 1 chair
Speed: 108.3ms pre-process, 112.6ms inference, 6.0ms NMS per image at shape (1, 3, 352, 640)
%matplotlib inline
plt.imshow(np.squeeze(results.render()))
plt.show()

results.show()

results.render()
[array([[[ 16,  23,  33],
         [ 16,  23,  33],
         [ 17,  24,  34],
         ...,
         [211, 215, 214],
         [211, 215, 214],
         [211, 215, 214]],
 
        [[ 16,  23,  33],
         [ 16,  23,  33],
         [ 17,  24,  34],
         ...,
         [211, 215, 214],
         [211, 215, 214],
         [211, 215, 214]],
 
        [[ 16,  23,  33],
         [ 16,  23,  33],
         [ 17,  24,  34],
         ...,
         [211, 215, 214],
         [211, 215, 214],
         [211, 215, 214]],
 
        ...,
 
        [[  7,  11,  14],
         [  7,  11,  14],
         [  7,  11,  14],
         ...,
         [142, 152, 161],
         [142, 152, 161],
         [142, 152, 161]],
 
        [[  7,  11,  14],
         [  7,  11,  14],
         [  7,  11,  14],
         ...,
         [142, 152, 161],
         [142, 152, 161],
         [142, 152, 161]],
 
        [[  7,  11,  14],
         [  7,  11,  14],
         [  7,  11,  14],
         ...,
         [142, 152, 161],
         [142, 152, 161],
         [142, 152, 161]]], dtype=uint8)]
np.array(results.render()).shape
(1, 1075, 2000, 3)
Making detections and working out on code to run camera
import cv2
import numpy as np

cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret, frame = cap.read()

    # Check if the frame is successfully captured
    if not ret:
        print("Failed to capture frame")
        break

    # Make detections
    results = model(frame)

    # Check if results are not None
    if results is not None:
        rendered_frame = np.squeeze(results.render())

        # Check if the rendered frame is not None
        if rendered_frame is not None:
            cv2.imshow('YOLO', rendered_frame)

    if cv2.waitKey(10) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
Dataset Creation
import torch
import matplotlib.pyplot as plt
import numpy as np
import cv2
import uuid
import os
import time
 
images_path = os.path.join('data', 'images')
labels = ['awake','drowsy']
number_imgs = 50
cap = cv2.VideoCapture(0)
for label in labels:
    #printing the name of labels the image would be collevcted
    print('Collected images for {}'.format(labels))
    time.sleep(5)
    
    for img_num in range(number_imgs):
        print('Collected images for {}, image number {}' .format(labels, img_num))
        
        ret , frame = cap.read()
        #Naming an Image
        imgname = os.path.join(images_path, label + '.' +str(uuid.uuid1())+ '.jpg')
        # Assigning it a frame
        cv2.imwrite(imgname, frame)
        # Rendering it
        cv2.imshow('Image Collection', frame)
        # Giving time to move
        time.sleep(2)`
};

export default cyclistic;
