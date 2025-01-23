'''This file createa a simple server to handle input text and return analysed text'''
from flask import Flask, render_template, request
from EmotionDetection import emotion_detection as NLP


app = Flask(__name__)

@app.route("/emotionDetector")
def emotion_detector():
    '''Called when analyze button clicked. Takes input text and returns analysis for display'''
    text_to_analyze = request.args.get('textToAnalyze')
    analysis = NLP.emotion_detector(text_to_analyze)
    if analysis['dominant_emotion'] is not None:
        dominant_emotion = analysis['dominant_emotion']
        analysis.pop('dominant_emotion')
        return (f'For the given statement, the system response is {analysis}.'
                f'The dominant emotion is {dominant_emotion}')

    return 'Invalid text! Please try again!'

@app.route("/")
def render_index_page():
    '''Home page route'''
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
