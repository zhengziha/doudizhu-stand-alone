
(function () {
var scripts = [{"deps":{"./assets/scripts/mygolbal":3,"./assets/scripts/util/event_lister":25,"./assets/scripts/util/waitnode":6,"./assets/scripts/common/common":2,"./assets/scripts/common/DataNotify":12,"./assets/scripts/common/loadingLayer":24,"./assets/scripts/common/api":14,"./assets/scripts/common/audioManager":15,"./assets/scripts/data/ddzData":9,"./assets/scripts/data/socket_ctr":16,"./assets/scripts/data/player":20,"./assets/scripts/data/ddzConstants":21,"./assets/scripts/gameScene/gameScene":1,"./assets/scripts/gameScene/gameingUI":7,"./assets/scripts/gameScene/prefabs/player_node":8,"./assets/scripts/gameScene/prefabs/card":23,"./assets/scripts/gameScene/gamebeforeUI":22,"./assets/scripts/start":17,"./assets/scripts/hallscene/prefabs_script/creatRoom":19,"./assets/scripts/hallscene/prefabs_script/joinRoom":4,"./assets/scripts/hallscene/hallScene":18,"./assets/scripts/loginscene/loginScene":11,"./assets/servers/ddzServers/gameRule":27,"./assets/servers/ddzServers/ddzServers":13,"./assets/servers/ddzServers/carder":5,"./assets/servers/ddzServers/AILogic":26,"./assets/migration/use_v2.0.x_cc.Toggle_event":10},"path":"preview-scripts/__qc_index__.js"},{"deps":{"ddzData":9,"ddzConstants":21,"../mygolbal.js":3},"path":"preview-scripts/assets/scripts/gameScene/gameScene.js"},{"deps":{"audioManager":15},"path":"preview-scripts/assets/scripts/common/common.js"},{"deps":{"./data/socket_ctr.js":16,"./data/player.js":20,"./util/event_lister.js":25},"path":"preview-scripts/assets/scripts/mygolbal.js"},{"deps":{"../../mygolbal.js":3},"path":"preview-scripts/assets/scripts/hallscene/prefabs_script/joinRoom.js"},{"deps":{},"path":"preview-scripts/assets/servers/ddzServers/carder.js"},{"deps":{},"path":"preview-scripts/assets/scripts/util/waitnode.js"},{"deps":{"ddzData":9,"ddzConstants":21,"../mygolbal.js":3},"path":"preview-scripts/assets/scripts/gameScene/gameingUI.js"},{"deps":{"ddzData":9,"ddzConstants":21,"../../mygolbal.js":3},"path":"preview-scripts/assets/scripts/gameScene/prefabs/player_node.js"},{"deps":{"ddzConstants":21,"DataNotify":12},"path":"preview-scripts/assets/scripts/data/ddzData.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{"../mygolbal.js":3},"path":"preview-scripts/assets/scripts/loginscene/loginScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/common/DataNotify.js"},{"deps":{"carder":5,"AILogic":26,"mygolbal":3,"ddzData":9,"ddzConstants":21},"path":"preview-scripts/assets/servers/ddzServers/ddzServers.js"},{"deps":{},"path":"preview-scripts/assets/scripts/common/api.js"},{"deps":{},"path":"preview-scripts/assets/scripts/common/audioManager.js"},{"deps":{"../util/event_lister.js":25},"path":"preview-scripts/assets/scripts/data/socket_ctr.js"},{"deps":{"common":2,"ddzData":9,"ddzServers":13,"gameRule":27,"./mygolbal.js":3},"path":"preview-scripts/assets/scripts/start.js"},{"deps":{"../mygolbal.js":3},"path":"preview-scripts/assets/scripts/hallscene/hallScene.js"},{"deps":{"../../mygolbal.js":3},"path":"preview-scripts/assets/scripts/hallscene/prefabs_script/creatRoom.js"},{"deps":{},"path":"preview-scripts/assets/scripts/data/player.js"},{"deps":{},"path":"preview-scripts/assets/scripts/data/ddzConstants.js"},{"deps":{"../mygolbal.js":3},"path":"preview-scripts/assets/scripts/gameScene/gamebeforeUI.js"},{"deps":{"ddzConstants":21,"ddzData":9,"../../mygolbal.js":3},"path":"preview-scripts/assets/scripts/gameScene/prefabs/card.js"},{"deps":{"../mygolbal.js":3},"path":"preview-scripts/assets/scripts/common/loadingLayer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/util/event_lister.js"},{"deps":{},"path":"preview-scripts/assets/servers/ddzServers/AILogic.js"},{"deps":{},"path":"preview-scripts/assets/servers/ddzServers/gameRule.js"}];
var entries = ["preview-scripts/__qc_index__.js"];

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;
        
            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
        
            return path;
        });

        loadScripts(srcs, function () {
            self.run();
            cb();
        });
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    