ProjectsFactory = function ($http) {
    var projectsFactory = function () {
        this.items = [];
        this.busy = false;
        this.after = '';
    };

    projectsFactory.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;

        var url = "https://localhost:44300/Projects/List?after=" + this.after;
        $http.get(url).success(function (data) {
            var items = data;
            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i]);
            }
            this.after = items[items.length - 1].Id;
            this.busy = false;
        }.bind(this));
    };

    return projectsFactory;
};

ProjectsFactory.$inject = ['$http'];