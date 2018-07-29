# Flask + Vue.js + ([Prophet](https://github.com/facebook/prophet))
## ServerSetup
```
$ cd lib
$ virtualenv -p python3 venv
$ source venv/bin/activate
$ pip install -r requirements.txt
$ cd ..
$ FLASK_APP=run.py FLASK_DEBUG=1 flask run
```

## FrontSetup
```
$ cd app
$ yarn install
$ yarn start
```

## FrontBuild
```
$ yarn build
```
