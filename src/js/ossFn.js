const oss = {
  /**
   * POST请求：
   * @param $this:vue实例的this
   * @param url:请求路径
   * @param data:请求发送的数据
   * @param responseData:请求返回的数据
   */
    post: function ($this, url, data, responseData) {
    // console.log($this.axios);
    $this.axios({
      url: $this.baseUrl + url,
      method: 'post',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: data,
      transformRequest: [function (data, headers) {
        return $this.qs.stringify(data);
      }],
    }).then(function (res) {
      $this[responseData] = res.data;
    }).catch(function (err) {
      console.log(err);
      $this[responseData] = err.data;
    })
  },

  /**
   * GET请求：
   * @param $this:vue实例的this
   * @param url:请求路径
   * @param data:请求发送的数据
   * @param responseData:请求返回的数据
   */
  get:function ($this, url, responseData) {
    $this.axios({
      url: $this.baseUrl + url,
      method: 'get',
    }).then(function (res) {
      $this[responseData] = res.data;
    }).catch(function (err) {
      $this[responseData] = err.data;
    })
  },
};

export default oss;
