import os, errno, re
from time import gmtime, strftime

from flask import Flask, render_template, abort, send_from_directory,make_response,send_file
from jinja2 import TemplateNotFound

app = Flask(__name__)

app.run

@app.route('/', defaults={'page': 'index'})
@app.route('/<page>')
def flask_geekmeet(page=None):
    try:
        return render_template('%s.html' % page)
    except TemplateNotFound:
        abort(404)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.context_processor
def inject_year():
    return dict(c_year=strftime('%Y', gmtime()))


'''
helpers
'''

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico', mimetype='image/vnd.microsoft.icon')
'''
#look .server/*.conf
@app.route('/robots.txt')
def robots():
    return send_from_directory(os.path.join(app.root_path, 'static'),'robots.txt')

@app.route('/crossdomain.xml')
def crossdomain():
    return send_from_directory(os.path.join(app.root_path, 'static'),'crossdomain.xml', mimetype='text/xml')
'''

if __name__ == '__main__':
    app.debug = True
    if (app.debug):
        #app.run()
	app.run(host='local.devserver')
