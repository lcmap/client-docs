# User Agent

> The LCMAP clients user agent string:

```shell
# The cURL user agent string is used without alteration
```

```python
from lcmap.client import http
http.get_user_agent()
'LCMAP REST Client/1.0.0
  (Python 2.7.9 (default, Apr  2 2015, 15:33:21) [GCC 4.9.2])
  (+https://github.com/usgs-eros/lcmap-client-py)'
```

```vb
Julia: TBD
```

```clojure
=> (require '[lcmap.client.http :as http])
nil
=> http/user-agent
"LCMAP REST Client/1.0.0
  (Clojure 1.8.0; Java 1.7.0_91)
  (+https://github.com/USGS-EROS/lcmap-client-clj)"
```

```ruby
Ruby: TBD
```

```r
R: TBD
```

Each client provides a user agent string that identifies it and provides contextual information (e.g., version and location of source code.

The exact value of the user agent string will differ depending upon the client library you have selected.
