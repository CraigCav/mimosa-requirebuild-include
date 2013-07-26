"use strict";

exports.defaults = function() {
  return {
    requireBuildInclude: {
      patterns: []
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n"+
         "  # requireBuildInclude:            \n" + 
         "    # patterns: []                 # \n";
};

exports.validate = function(config, validators) {
  var errors = [];
  validators.isArrayOfStringsMustExist(errors, "requireBuildInclude.patterns", config.requireBuildInclude.patterns);
  return errors;
};