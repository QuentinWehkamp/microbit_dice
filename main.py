nummer = 0

def on_gesture_shake():
    global nummer
    nummer = randint(1, 6)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
