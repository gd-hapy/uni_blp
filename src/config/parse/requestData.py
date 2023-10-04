import sys
import requests
from urllib.parse import urlparse


# Params
# url: string
# method: string

_url = sys.argv[1]
(__scheme, __netloc, __path, __param, __query, __fragment) = urlparse(_url)

_authority = __netloc
_method = sys.argv[2].upper()
_path = __path.split('/')[1] + '?' + __query
_scheme = __scheme
_referer = __scheme + '://' + _authority + '/so.php?' + _url.split('&')[1]
headers = {
    'authority': _authority,
    'method': _method,
    'path': _path,
    'scheme': _scheme,
    'Accept': 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cookie': 'list_num=0; live_num=; reload='+_scheme + '://' + _authority,
    'Referer': _referer,
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.188 Safari/537.36 CrKey/1.54.250320',
    'X-Requested-With': 'XMLHttpRequest'
}


response = requests.get(_url, headers=headers)
response.encoding = response.apparent_encoding
sys.stdout.write(response.text)
sys.stdout.flush()


# response = requests.get(_url, headers=headers)
#        # 获取网页内容，返回html数据
#        # 通过状态码判断是否获取成功
# if response.status_code == 200:
#     #response.encoding = 'utf-8'
#     print(response.headers)
#     print(response.encoding)
#     key = 'Content-Encoding'
#     # print(response.headers[key])
#     print("-----------")
#     if(key in response.headers and response.headers['Content-Encoding'] == 'br'):
#         data = brotli.decompress(response.content)
#         data1 = data.decode('utf-8')
#         print(data1)
#     print(response.text)
