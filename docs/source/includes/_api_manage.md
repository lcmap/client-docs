# API: Management

<aside class="caution">
Only users with the superuser role may make management calls to the LCMAP services.
</aside>

> Get a list of top-level management resources:

```shell
$ curl -s -X GET \
  -H "$LCMAP_VERSION_HDR" \
  -H "$LCMAP_TOKEN_HDR" \
   "${LCMAP_ENDPOINT}/api/system" | \
   jq .body.result
{
  "links": [
    "/api/system/status",
    "/api/system/json-status",
    "/api/system/metrics",
    "/api/system/reference"
  ]
}
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

In the following sections we will demonstrate the various management-level API calls available to users with appropriate levels of permissions. To see which management resources are available to a given user, see the example to the right.


## Metrics

> Get a listing of the names for all the metrics being gathered:

```shell
$ curl -s -X GET \
  -H "$LCMAP_VERSION_HDR" \
  -H "$LCMAP_TOKEN_HDR" \
  "${LCMAP_ENDPOINT}/api/system/metrics/names" | \
  jq .body.result

[
  "jvm.attribute.name",
  "jvm.attribute.uptime",
  "jvm.attribute.vendor",
  "jvm.file",
  "jvm.gc.PS-MarkSweep.count",
  "jvm.gc.PS-MarkSweep.time",
  "jvm.gc.PS-Scavenge.count",
  "jvm.gc.PS-Scavenge.time",
  "jvm.memory.heap.committed",
  "jvm.memory.heap.init",
  "jvm.memory.heap.max",
  "jvm.memory.heap.usage",
  "jvm.memory.heap.used",
  "jvm.memory.non-heap.committed",
  "jvm.memory.non-heap.init",
  "jvm.memory.non-heap.max",
  "jvm.memory.non-heap.usage",
  "jvm.memory.non-heap.used",
  "jvm.memory.pools.Code-Cache.committed",
  "jvm.memory.pools.Code-Cache.init",
  "jvm.memory.pools.Code-Cache.max",
  "jvm.memory.pools.Code-Cache.usage",
  "jvm.memory.pools.Code-Cache.used",
  "jvm.memory.pools.PS-Eden-Space.committed",
  "jvm.memory.pools.PS-Eden-Space.init",
  "jvm.memory.pools.PS-Eden-Space.max",
  "jvm.memory.pools.PS-Eden-Space.usage",
  "jvm.memory.pools.PS-Eden-Space.used",
  "jvm.memory.pools.PS-Old-Gen.committed",
  "jvm.memory.pools.PS-Old-Gen.init",
  "jvm.memory.pools.PS-Old-Gen.max",
  "jvm.memory.pools.PS-Old-Gen.usage",
  "jvm.memory.pools.PS-Old-Gen.used",
  "jvm.memory.pools.PS-Perm-Gen.committed",
  "jvm.memory.pools.PS-Perm-Gen.init",
  "jvm.memory.pools.PS-Perm-Gen.max",
  "jvm.memory.pools.PS-Perm-Gen.usage",
  "jvm.memory.pools.PS-Perm-Gen.used",
  "jvm.memory.pools.PS-Survivor-Space.committed",
  "jvm.memory.pools.PS-Survivor-Space.init",
  "jvm.memory.pools.PS-Survivor-Space.max",
  "jvm.memory.pools.PS-Survivor-Space.usage",
  "jvm.memory.pools.PS-Survivor-Space.used",
  "jvm.memory.total.committed",
  "jvm.memory.total.init",
  "jvm.memory.total.max",
  "jvm.memory.total.used",
  "jvm.thread.blocked.count",
  "jvm.thread.count",
  "jvm.thread.daemon.count",
  "jvm.thread.deadlock.count",
  "jvm.thread.deadlocks",
  "jvm.thread.new.count",
  "jvm.thread.runnable.count",
  "jvm.thread.terminated.count",
  "jvm.thread.timed_waiting.count",
  "jvm.thread.waiting.count",
  "ring.handling-time.CONNECT",
  "ring.handling-time.DELETE",
  "ring.handling-time.GET",
  "ring.handling-time.HEAD",
  "ring.handling-time.OPTIONS",
  "ring.handling-time.OTHER",
  "ring.handling-time.POST",
  "ring.handling-time.PUT",
  "ring.handling-time.TRACE",
  "ring.requests-scheme.rate.http",
  "ring.requests-scheme.rate.https",
  "ring.requests.active",
  "ring.requests.rate",
  "ring.requests.rate.CONNECT",
  "ring.requests.rate.DELETE",
  "ring.requests.rate.GET",
  "ring.requests.rate.HEAD",
  "ring.requests.rate.OPTIONS",
  "ring.requests.rate.OTHER",
  "ring.requests.rate.POST",
  "ring.requests.rate.PUT",
  "ring.requests.rate.TRACE",
  "ring.responses.rate",
  "ring.responses.rate.2xx",
  "ring.responses.rate.3xx",
  "ring.responses.rate.4xx",
  "ring.responses.rate.5xx"
]
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

> Get a listing of the names for all counter-style matrics:

```shell
$ curl -s -X GET \
  -H "$LCMAP_VERSION_HDR" \
  -H "$LCMAP_TOKEN_HDR" \
  "${LCMAP_ENDPOINT}/api/system/metrics/counters" | \
  jq .body.result

[
  "ring.requests.active"
]
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

> Get a listing of the names for all gauge-style matrics:

```shell
$ curl -s -X GET \
  -H "$LCMAP_VERSION_HDR" \
  -H "$LCMAP_TOKEN_HDR" \
  "${LCMAP_ENDPOINT}/api/system/metrics/gauges" | \
  jq .body.result

[
  "jvm.thread.deadlock.count",
  "jvm.memory.pools.PS-Survivor-Space.init",
  "jvm.memory.total.init",
  "jvm.memory.pools.PS-Survivor-Space.used",
  "jvm.thread.new.count",
  "jvm.memory.pools.PS-Perm-Gen.used",
  "jvm.gc.PS-MarkSweep.time",
  "jvm.memory.non-heap.init",
  "jvm.memory.pools.PS-Eden-Space.usage",
  "jvm.memory.pools.PS-Survivor-Space.max",
  "jvm.memory.pools.PS-Eden-Space.init",
  "jvm.memory.pools.Code-Cache.init",
  "jvm.memory.pools.PS-Old-Gen.used",
  "jvm.memory.pools.PS-Survivor-Space.usage",
  "jvm.gc.PS-Scavenge.count",
  "jvm.thread.terminated.count",
  "jvm.memory.pools.PS-Eden-Space.committed",
  "jvm.attribute.vendor",
  "jvm.attribute.name",
  "jvm.memory.heap.used",
  "jvm.thread.deadlocks",
  "jvm.memory.heap.usage",
  "jvm.memory.pools.Code-Cache.used",
  "jvm.gc.PS-MarkSweep.count",
  "jvm.memory.pools.PS-Perm-Gen.init",
  "jvm.memory.pools.PS-Survivor-Space.committed",
  "jvm.memory.pools.PS-Eden-Space.used",
  "jvm.file",
  "jvm.memory.pools.PS-Perm-Gen.usage",
  "jvm.memory.pools.PS-Perm-Gen.committed",
  "jvm.memory.heap.max",
  "jvm.memory.heap.committed",
  "jvm.memory.non-heap.committed",
  "jvm.thread.daemon.count",
  "jvm.memory.pools.Code-Cache.committed",
  "jvm.memory.pools.PS-Perm-Gen.max",
  "jvm.memory.non-heap.used",
  "jvm.memory.pools.PS-Old-Gen.max",
  "jvm.thread.blocked.count",
  "jvm.memory.pools.PS-Old-Gen.init",
  "jvm.thread.count",
  "jvm.memory.non-heap.max",
  "jvm.memory.total.committed",
  "jvm.memory.total.max",
  "jvm.thread.timed_waiting.count",
  "jvm.memory.pools.Code-Cache.usage",
  "jvm.memory.heap.init",
  "jvm.gc.PS-Scavenge.time",
  "jvm.memory.pools.PS-Old-Gen.committed",
  "jvm.memory.pools.PS-Eden-Space.max",
  "jvm.attribute.uptime",
  "jvm.thread.waiting.count",
  "jvm.memory.pools.PS-Old-Gen.usage",
  "jvm.memory.pools.Code-Cache.max",
  "jvm.thread.runnable.count",
  "jvm.memory.total.used",
  "jvm.memory.non-heap.usage"
]
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

> Get a listing of the names for all meter-style matrics:

```shell
$ curl -s -X GET \
  -H "$LCMAP_VERSION_HDR" \
  -H "$LCMAP_TOKEN_HDR" \
  "${LCMAP_ENDPOINT}/api/system/metrics/meters" | \
  jq .body.result

[
  "ring.requests.rate.GET",
  "ring.requests-scheme.rate.https",
  "ring.requests.rate.CONNECT",
  "ring.responses.rate",
  "ring.responses.rate.5xx",
  "ring.requests-scheme.rate.http",
  "ring.responses.rate.4xx",
  "ring.requests.rate.OTHER",
  "ring.responses.rate.3xx",
  "ring.responses.rate.2xx",
  "ring.requests.rate.HEAD",
  "ring.requests.rate.DELETE",
  "ring.requests.rate.PUT",
  "ring.requests.rate.OPTIONS",
  "ring.requests.rate.POST",
  "ring.requests.rate.TRACE",
  "ring.requests.rate"
]
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

> Get a listing of the names for all timer-style matrics:

```shell
$ curl -s -X GET \
  -H "$LCMAP_VERSION_HDR" \
  -H "$LCMAP_TOKEN_HDR" \
  "${LCMAP_ENDPOINT}/api/system/metrics/timers" | \
  jq .body.result

[
  "ring.handling-time.POST",
  "ring.handling-time.PUT",
  "ring.handling-time.HEAD",
  "ring.handling-time.OTHER",
  "ring.handling-time.OPTIONS",
  "ring.handling-time.TRACE",
  "ring.handling-time.CONNECT",
  "ring.handling-time.GET",
  "ring.handling-time.DELETE"
]
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

> Get a snapshot of the latest state of the system metrics (note that the results for this API call are made via a third-party system and as such -- for now, at least -- differ in the structure of the data results):

```shell
$ curl -s -X GET \
  -H "$LCMAP_VERSION_HDR" \
  -H "$LCMAP_TOKEN_HDR" \
  "${LCMAP_ENDPOINT}/api/system/metrics/all" | \
  jq .

{
  "jvm.thread.deadlock.count": {
    "type": "gauge",
    "value": 0
  },
  "ring.requests.rate.GET": {
    "type": "meter",
    "rates": {
      "1": 0.026157628273561082,
      "5": 0.01963214767238827,
      "15": 0.010477944118208021,
      "total": 15
    }
  },
  "jvm.memory.pools.PS-Survivor-Space.init": {
    "type": "gauge",
    "value": 21495808
  },
  "jvm.memory.total.init": {
    "type": "gauge",
    "value": 546834176
  },
  "ring.handling-time.POST": {
    "type": "timer",
    "rates": {
      "1": 5.044467930396602e-08,
      "5": 0.00026245325518501223,
      "15": 0.00047622710815791445,
      "total": 1
    },
    "percentiles": {
      "0.75": 8955110,
      "0.95": 8955110,
      "0.99": 8955110,
      "0.999": 8955110,
      "1.0": 8955110
    },
    "max": 8955110,
    "min": 8955110,
    "mean": 8955110,
    "standard-deviation": 0
  },
  "ring.requests-scheme.rate.https": {
    "type": "meter",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    }
  },
  "jvm.memory.pools.PS-Survivor-Space.used": {
    "type": "gauge",
    "value": 16280832
  },
  "jvm.thread.new.count": {
    "type": "gauge",
    "value": 0
  },
  "ring.requests.rate.CONNECT": {
    "type": "meter",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    }
  },
  "jvm.memory.pools.PS-Perm-Gen.used": {
    "type": "gauge",
    "value": 69985624
  },
  "jvm.gc.PS-MarkSweep.time": {
    "type": "gauge",
    "value": 0
  },
  "jvm.memory.non-heap.init": {
    "type": "gauge",
    "value": 24576000
  },
  "jvm.memory.pools.PS-Eden-Space.usage": {
    "type": "gauge",
    "value": 0.5781179794422221
  },
  "jvm.memory.pools.PS-Survivor-Space.max": {
    "type": "gauge",
    "value": 19398656
  },
  "jvm.memory.pools.PS-Eden-Space.init": {
    "type": "gauge",
    "value": 131072000
  },
  "ring.handling-time.PUT": {
    "type": "timer",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    },
    "percentiles": {
      "0.75": 0,
      "0.95": 0,
      "0.99": 0,
      "0.999": 0,
      "1.0": 0
    },
    "max": 0,
    "min": 0,
    "mean": 0,
    "standard-deviation": 0
  },
  "jvm.memory.pools.Code-Cache.init": {
    "type": "gauge",
    "value": 2555904
  },
  "ring.handling-time.HEAD": {
    "type": "timer",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    },
    "percentiles": {
      "0.75": 0,
      "0.95": 0,
      "0.99": 0,
      "0.999": 0,
      "1.0": 0
    },
    "max": 0,
    "min": 0,
    "mean": 0,
    "standard-deviation": 0
  },
  "ring.responses.rate": {
    "type": "meter",
    "rates": {
      "1": 0.026157678718240387,
      "5": 0.019894600927573274,
      "15": 0.010954171226365939,
      "total": 15
    }
  },
  "ring.responses.rate.5xx": {
    "type": "meter",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    }
  },
  "jvm.memory.pools.PS-Old-Gen.used": {
    "type": "gauge",
    "value": 51217920
  },
  "ring.requests-scheme.rate.http": {
    "type": "meter",
    "rates": {
      "1": 0.026157678718240387,
      "5": 0.019894600927573274,
      "15": 0.010954171226365939,
      "total": 16
    }
  },
  "ring.responses.rate.4xx": {
    "type": "meter",
    "rates": {
      "1": 7.725475825873377e-05,
      "5": 0.0014001256069190477,
      "15": 0.0012527170950420523,
      "total": 2
    }
  },
  "jvm.memory.pools.PS-Survivor-Space.usage": {
    "type": "gauge",
    "value": 0.8392762880067568
  },
  "ring.handling-time.OTHER": {
    "type": "timer",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    },
    "percentiles": {
      "0.75": 0,
      "0.95": 0,
      "0.99": 0,
      "0.999": 0,
      "1.0": 0
    },
    "max": 0,
    "min": 0,
    "mean": 0,
    "standard-deviation": 0
  },
  "ring.requests.rate.OTHER": {
    "type": "meter",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    }
  },
  "jvm.gc.PS-Scavenge.count": {
    "type": "gauge",
    "value": 16
  },
  "jvm.thread.terminated.count": {
    "type": "gauge",
    "value": 0
  },
  "jvm.memory.pools.PS-Eden-Space.committed": {
    "type": "gauge",
    "value": 1673527296
  },
  "jvm.attribute.vendor": {
    "type": "gauge",
    "value": "Oracle Corporation OpenJDK 64-Bit Server VM 24.91-b01 (1.7)"
  },
  "ring.requests.active": {
    "type": "counter",
    "value": 1
  },
  "ring.responses.rate.3xx": {
    "type": "meter",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    }
  },
  "jvm.attribute.name": {
    "type": "gauge",
    "value": "12822@mndltl01"
  },
  "jvm.memory.heap.used": {
    "type": "gauge",
    "value": 1655138224
  },
  "jvm.thread.deadlocks": {
    "type": "gauge",
    "value": []
  },
  "jvm.memory.heap.usage": {
    "type": "gauge",
    "value": 0.22280511176950452
  },
  "ring.handling-time.OPTIONS": {
    "type": "timer",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    },
    "percentiles": {
      "0.75": 0,
      "0.95": 0,
      "0.99": 0,
      "0.999": 0,
      "1.0": 0
    },
    "max": 0,
    "min": 0,
    "mean": 0,
    "standard-deviation": 0
  },
  "jvm.memory.pools.Code-Cache.used": {
    "type": "gauge",
    "value": 6026752
  },
  "jvm.gc.PS-MarkSweep.count": {
    "type": "gauge",
    "value": 0
  },
  "jvm.memory.pools.PS-Perm-Gen.init": {
    "type": "gauge",
    "value": 22020096
  },
  "ring.handling-time.TRACE": {
    "type": "timer",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    },
    "percentiles": {
      "0.75": 0,
      "0.95": 0,
      "0.99": 0,
      "0.999": 0,
      "1.0": 0
    },
    "max": 0,
    "min": 0,
    "mean": 0,
    "standard-deviation": 0
  },
  "jvm.memory.pools.PS-Survivor-Space.committed": {
    "type": "gauge",
    "value": 19398656
  },
  "jvm.memory.pools.PS-Eden-Space.used": {
    "type": "gauge",
    "value": 1587639472
  },
  "ring.responses.rate.2xx": {
    "type": "meter",
    "rates": {
      "1": 0.026080423959981648,
      "5": 0.018494475320654236,
      "15": 0.009701454131323886,
      "total": 13
    }
  },
  "jvm.file": {
    "type": "gauge",
    "value": 0.004302978515625
  },
  "jvm.memory.pools.PS-Perm-Gen.usage": {
    "type": "gauge",
    "value": 0.4020692296774991
  },
  "ring.requests.rate.HEAD": {
    "type": "meter",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    }
  },
  "jvm.memory.pools.PS-Perm-Gen.committed": {
    "type": "gauge",
    "value": 70254592
  },
  "jvm.memory.heap.max": {
    "type": "gauge",
    "value": 7428636672
  },
  "ring.requests.rate.DELETE": {
    "type": "meter",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    }
  },
  "jvm.memory.heap.committed": {
    "type": "gauge",
    "value": 2041053184
  },
  "jvm.memory.non-heap.committed": {
    "type": "gauge",
    "value": 76611584
  },
  "jvm.thread.daemon.count": {
    "type": "gauge",
    "value": 9
  },
  "jvm.memory.pools.Code-Cache.committed": {
    "type": "gauge",
    "value": 6356992
  },
  "ring.handling-time.CONNECT": {
    "type": "timer",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    },
    "percentiles": {
      "0.75": 0,
      "0.95": 0,
      "0.99": 0,
      "0.999": 0,
      "1.0": 0
    },
    "max": 0,
    "min": 0,
    "mean": 0,
    "standard-deviation": 0
  },
  "jvm.memory.pools.PS-Perm-Gen.max": {
    "type": "gauge",
    "value": 174063616
  },
  "jvm.memory.non-heap.used": {
    "type": "gauge",
    "value": 76012376
  },
  "jvm.memory.pools.PS-Old-Gen.max": {
    "type": "gauge",
    "value": 5571084288
  },
  "ring.requests.rate.PUT": {
    "type": "meter",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    }
  },
  "jvm.thread.blocked.count": {
    "type": "gauge",
    "value": 0
  },
  "jvm.memory.pools.PS-Old-Gen.init": {
    "type": "gauge",
    "value": 348127232
  },
  "jvm.thread.count": {
    "type": "gauge",
    "value": 38
  },
  "jvm.memory.non-heap.max": {
    "type": "gauge",
    "value": 224395264
  },
  "jvm.memory.total.committed": {
    "type": "gauge",
    "value": 2117664768
  },
  "ring.handling-time.GET": {
    "type": "timer",
    "rates": {
      "1": 0.026157628273561082,
      "5": 0.01963214767238827,
      "15": 0.010477944118208021,
      "total": 14
    },
    "percentiles": {
      "0.75": 5839116.75,
      "0.95": 90563561,
      "0.99": 90563561,
      "0.999": 90563561,
      "1.0": 90563561
    },
    "max": 90563561,
    "min": 384453,
    "mean": 8784919.5,
    "standard-deviation": 23640230.79960157
  },
  "jvm.memory.total.max": {
    "type": "gauge",
    "value": 7653031936
  },
  "ring.requests.rate.OPTIONS": {
    "type": "meter",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    }
  },
  "jvm.thread.timed_waiting.count": {
    "type": "gauge",
    "value": 9
  },
  "jvm.memory.pools.Code-Cache.usage": {
    "type": "gauge",
    "value": 0.11974080403645833
  },
  "jvm.memory.heap.init": {
    "type": "gauge",
    "value": 522258176
  },
  "jvm.gc.PS-Scavenge.time": {
    "type": "gauge",
    "value": 238
  },
  "ring.handling-time.DELETE": {
    "type": "timer",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    },
    "percentiles": {
      "0.75": 0,
      "0.95": 0,
      "0.99": 0,
      "0.999": 0,
      "1.0": 0
    },
    "max": 0,
    "min": 0,
    "mean": 0,
    "standard-deviation": 0
  },
  "jvm.memory.pools.PS-Old-Gen.committed": {
    "type": "gauge",
    "value": 348127232
  },
  "jvm.memory.pools.PS-Eden-Space.max": {
    "type": "gauge",
    "value": 2746220544
  },
  "jvm.attribute.uptime": {
    "type": "gauge",
    "value": 796178
  },
  "jvm.thread.waiting.count": {
    "type": "gauge",
    "value": 6
  },
  "jvm.memory.pools.PS-Old-Gen.usage": {
    "type": "gauge",
    "value": 0.009193528109119142
  },
  "ring.requests.rate.POST": {
    "type": "meter",
    "rates": {
      "1": 5.044467930396602e-08,
      "5": 0.00026245325518501223,
      "15": 0.00047622710815791445,
      "total": 1
    }
  },
  "jvm.memory.pools.Code-Cache.max": {
    "type": "gauge",
    "value": 50331648
  },
  "jvm.thread.runnable.count": {
    "type": "gauge",
    "value": 23
  },
  "ring.requests.rate.TRACE": {
    "type": "meter",
    "rates": {
      "1": 0,
      "5": 0,
      "15": 0,
      "total": 0
    }
  },
  "jvm.memory.total.used": {
    "type": "gauge",
    "value": 1731150600
  },
  "ring.requests.rate": {
    "type": "meter",
    "rates": {
      "1": 0.026157678718240387,
      "5": 0.019894600927573274,
      "15": 0.010954171226365939,
      "total": 16
    }
  },
  "jvm.memory.non-heap.usage": {
    "type": "gauge",
    "value": 0.33874322766455534
  }
}
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

The various systems metrics API functions are demonstrated to the right.


## Status

> Get the current system status:

```shell
$ STATUS_JSON=$(curl -s -X GET \
    -H "$LCMAP_VERSION_HDR" -H "$LCMAP_TOKEN_HDR" \
    "${LCMAP_ENDPOINT}/api/system/json-status")
$ echo $STATUS_JSON|jq  -r '.status.jvm.memory'
{
  "free": "1091048952",
  "total": "1402994688",
  "max": "0"
}
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

> Get the system status in the format expected by JMeter (Tomcat-compatible):

```shell
$ STATUS_XML=$(curl -s -X GET \
    -H "$LCMAP_VERSION_HDR" -H "$LCMAP_TOKEN_HDR" \
    "${LCMAP_ENDPOINT}/api/system/status")
$ echo $STATUS_XML
<?xml version="1.0" encoding="UTF-8"?>
<status>
  <jvm>
    <memory free="993846000" total="1400897536" max="0"></memory>
    ...
  </jvm>
</status>
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

The status API functions are provided as a compatibility "layer" for metrics and monitoring tools design for use with the Tomcat Application server. In general, one should prefer the use of the JMX data detailed in the "Metrics" section above.

## Reference

> To see all the available references:

```shell
$ curl -s -X GET \
  -H "$LCMAP_VERSION_HDR" \
  -H "$LCMAP_TOKEN_HDR" \
  "${LCMAP_ENDPOINT}/api/system/reference" | \
  jq .body.result

{
  "links": [
    "/api/system/reference/error-types",
    "/api/system/reference/error-type/:id",
    "/api/system/reference/errors",
    "/api/system/reference/error/:id"
  ]
}
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

The LCMAP management API also supports querying system-level refernce data.


### Error Types

> To see the list of supported error types:

```shell
$ curl -s -X GET \
  -H "$LCMAP_VERSION_HDR" \
  -H "$LCMAP_TOKEN_HDR" \
  "${LCMAP_ENDPOINT}/api/system/reference/error-types" | \
  jq .body.result

{
  "gen": {
    "uri": "",
    "title": "",
    "description": ""
  },
  "auth": {
    "uri": "",
    "title": "",
    "description": ""
  },
  "data": {
    "uri": "",
    "title": "",
    "description": ""
  },
  "model": {
    "uri": "",
    "title": "",
    "description": ""
  },
  "event": {
    "uri": "",
    "title": "",
    "description": ""
  },
  "user": {
    "uri": "",
    "title": "",
    "description": ""
  },
  "system": {
    "uri": "",
    "title": "",
    "description": ""
  }
}
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

> It is also possible to query data on an individual error type:

```shell
$ curl -s -X GET \
  -H "$LCMAP_VERSION_HDR" \
  -H "$LCMAP_TOKEN_HDR" \
  "${LCMAP_ENDPOINT}/api/system/reference/error-type/auth" | \
  jq .body.result

{
  "uri": "",
  "title": "",
  "description": ""
}
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

<aside class="danger">
  This area of the API is under active development: it is incomplete and subject to change!
</aside>

### Error Lookup

> To see the list of supported errors:

```shell
$ curl -s -X GET \
  -H "$LCMAP_VERSION_HDR" \
  -H "$LCMAP_TOKEN_HDR" \
  "${LCMAP_ENDPOINT}/api/system/reference/errors" | \
  jq .body.result

{
  "60001": {
    "title": "",
    "category": "user",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "10000": {
    "title": "Invalid input data type",
    "category": "gen",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "50000": {
    "title": "",
    "category": "event",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "20404": {
    "title": "Authentication resource not found",
    "category": "auth",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "50001": {
    "title": "",
    "category": "event",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "40002": {
    "title": "",
    "category": "model",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "40000": {
    "title": "",
    "category": "model",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "40001": {
    "title": "",
    "category": "model",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "20500": {
    "title": "Authentication server error",
    "category": "auth",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "70002": {
    "title": "",
    "category": "system",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "70001": {
    "title": "",
    "category": "system",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "10002": {
    "title": "",
    "category": "gen",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "70000": {
    "title": "",
    "category": "system",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "30001": {
    "title": "",
    "category": "data",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "30002": {
    "title": "",
    "category": "data",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "10001": {
    "title": "",
    "category": "gen",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "60000": {
    "title": "",
    "category": "user",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "60002": {
    "title": "",
    "category": "user",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "20400": {
    "title": "Bad username or password",
    "category": "auth",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "50002": {
    "title": "",
    "category": "event",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  },
  "30000": {
    "title": "",
    "category": "data",
    "type": "",
    "detail": "",
    "instance": "<URL at error>"
  }
}
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

> It is also possible to query data on an individual error:

```shell
$ curl -s -X GET \
  -H "$LCMAP_VERSION_HDR" \
  -H "$LCMAP_TOKEN_HDR" \
  "${LCMAP_ENDPOINT}/api/system/reference/error/10000" | \
  jq .body.result

{
  "title": "Invalid input data type",
  "category": "gen",
  "type": "",
  "detail": "",
  "instance": "<URL at error>"
}
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

<aside class="danger">
  This area of the API is under active development: it is incomplete and subject to change!
</aside>


## Permissions

```shell
TBD
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

## Roles

```shell
TBD
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```

## Users

```shell
TBD
```

```python
TBD
```

```vb
TBD
```

```clojure
TBD
```

```ruby
TBD
```
