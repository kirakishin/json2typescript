"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Settings = (function () {
    function Settings() {
    }
    return Settings;
}());
Settings.MAPPING_PROPERTY = "__jsonconvert__mapping__";
Settings.MAPPER_PROPERTY = "__jsonconvert__mapper__";
exports.Settings = Settings;
;
var MappingOptions = (function () {
    function MappingOptions() {
        this.classPropertyName = "";
        this.jsonPropertyName = "";
        this.expectedJsonType = undefined;
        this.isOptional = false;
        this.customConverter = null;
    }
    return MappingOptions;
}());
exports.MappingOptions = MappingOptions;
//# sourceMappingURL=C:/Utilisateurs/A599669/Documents/GitHub/json2typescript/src/json2typescript/json-convert-options.js.map