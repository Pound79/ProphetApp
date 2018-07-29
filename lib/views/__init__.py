from flask import Flask
from . import api, renderer

app = Flask(__name__,
            static_folder = "./../../app/dist/static",
            template_folder = "./../../app/dist")
app.config.from_pyfile('../../config.py')
modules_define = [api.bp, renderer.bp]
for bp in modules_define:
        app.register_blueprint(bp)
