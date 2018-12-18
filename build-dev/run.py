import logging
import http.server
import socketserver
import getpass

class MyHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        logging.info("%s - - [%5] %5\n"%(
            self.client_address[0],
            self.log_date_time_string(),
            format%args
        ))

logging.basicConfig(
    filename='/log/http-server.log',
    format='%(asctime)s -%(levelname)s - %(message)s',
    level = logging.INFO
)

logging.getLogger().addHandler(logging.StreamHandler())
logging.info('Inicializando ...')
PORT = 8000

httpd = socketserver.TCPServer(("", PORT), MyHTTPHandler)
logging.info('Executando portar %s', PORT)
logging.info('usuario: %s', getpass.getuser() )
httpd.serve_forever()


