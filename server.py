from flask import Flask, g, render_template, redirect, url_for,\
    request, jsonify
import os
import random


app = Flask(__name__)
DIR = "static/img/"


@app.route('/')
def root():
    return render_template("base.html")


@app.route('/rando')
def rando():
    return jsonify(img="/"+DIR+random.choice(os.listdir(DIR)))


if __name__ == '__main__':
    app.run()
