package env

import "os"

// to start developing, update your own config in this file.
// note that you shouldn't commit this file unless any value really need to be updated.

var ENV_DefaultCodeGenRoot = os.Getenv("LAFTOOLS_ROOT")
var ENV_defaultAppConfigDir = "/Users/jerrylai/" + ENV_AppDirName

var ENV_ShouldPrintLogAsJSON = false
