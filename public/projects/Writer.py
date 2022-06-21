import pyttsx3
import speech_recognition as sr
import keyboard
import time


engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
#print(voices)
engine.setProperty('voices' , voices[1].id)
engine.setProperty('rate' , 180)


def speak(audio):
    engine.say(audio)
    print("   ")
    engine.runAndWait()

def takeCommand():

    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 0.5
        r.phrase_threshold = 2
        audio = r.listen(source)

 

    try:
        print("Recognizing...")    
        query = r.recognize_google(audio, language='en-in')
        print(f"User said: {query}\n") 

    except Exception as e:
        # print(e)    
        print("Say that again please...")   
    return query


if __name__ == "__main__":
    while True:  
        query = takeCommand().lower()
        x = list(query)
        keyboard.press(x)
        speak(query)
        time.sleep(3)
        
