SearchFactory = function ($http) {
    var searchFactory = function () {
        this.items = [];
        this.busy = false;
        this.after = '';
        this.phrase = "";
    };

    searchFactory.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;

        var url = "https://localhost:44300/Projects/SearchList?phrase=" + this.phrase + "&after=" + this.after;
        $http.get(url).success(function (data) {
            var items = data;
            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i]);
            }
            this.after = items[items.length - 1].Id;
            this.busy = false;
        }.bind(this));
    };

    return searchFactory;
};

SearchFactory.$inject = ['$http'];