from flask import Blueprint, jsonify
import pandas as pd
from fbprophet import Prophet
from io import BytesIO
import matplotlib.pyplot as plt
from matplotlib.backends.backend_agg import FigureCanvasAgg
from matplotlib.figure import Figure
import base64

bp = Blueprint('api', __name__, url_prefix='/api')

@bp.route('/prophet')
def prophet():
    df = pd.read_csv('https://raw.githubusercontent.com/facebook/prophet/master/examples/example_wp_log_peyton_manning.csv')
    m = Prophet()
    m.fit(df)
    future = m.make_future_dataframe(periods=36)
    future.tail()
    forecast = m.predict(future)
    response = {
      'img_data': get_img_data(m.plot(forecast)).decode('utf-8'),
      'components_img_data': get_img_data(m.plot_components(forecast)).decode('utf-8')
    }
    return jsonify(response)

def get_img_data(fig):
    canvas = FigureCanvasAgg(fig)
    png_output = BytesIO()
    canvas.print_png(png_output)
    return base64.b64encode(png_output.getvalue())
