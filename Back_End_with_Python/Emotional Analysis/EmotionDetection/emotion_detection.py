import requests
import json

def emotion_detector(text_to_analyze):
    apikey = "KdKdc1cPqbuze05MqAapqKFx8gAdz4IVTzTATGkc9kCL"

    # Replace with your actual URL
    url = "https://api.au-syd.natural-language-understanding.watson.cloud.ibm.com/instances/2052b0d3-a1b1-4f25-8a36-e3c5e87c59d0"

    # Prepare the request payload
    data = {
        "html": text_to_analyze,
        "features": {
            "emotion": {},
            "sentiment": {}
        }
    }
# Set the appropriate headers
    headers = {
        "Content-Type": "application/json"
    }
# Make the POST request
    response = requests.post(
        f"{url}/v1/analyze?version=2019-07-12",
        auth=("apikey", apikey),  # Authentication using the API key
        headers=headers,
        json=data  # Send data as JSON
    )

    # Check if the request was successful and print the result
    if response.status_code == 400:
        return {'sadness': None, 'joy': None, 'fear': None, 'disgust': None, 'anger': None, 'dominant_emotion': None}
    elif response.status_code == 200:
        emotions = response.json()["emotion"]["document"]["emotion"]
        dominant_emotion = max(emotions.values())
        emotions['dominant_emotion'] = next(x for x in emotions if emotions[x] == dominant_emotion)
        return emotions
    else:
        return f"Error: {response.status_code, response.text}"
    
