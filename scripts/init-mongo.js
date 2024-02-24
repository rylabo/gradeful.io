console.log("Initializing Gradeful Databases")
var logFile = "/var/log/init-mongo.log";
var logMessage = "Something went wrong during initialization...";

if(!process.env.GRADEFUL_STUDENT_DB || process.env.GRADEFUL_STUDENT_DB === "") {
  throw new Error("Error: environment variable GRADEFUL_STUDENT_DB not set.")
}

if(!process.env.GRADEFUL_STUDENT_DB_USER || process.env.GRADEFUL_STUDENT_DB_USER === "") {
  throw new Error("Error: environment variable GRADEFUL_STUDENT_DB_USER not set.")
}

if(!process.env.GRADEFUL_STUDENT_DB_PASSWORD || process.env.GRADEFUL_STUDENT_DB_PASSWORD === "") {
  throw new Error("Error: environment variable GRADEFUL_STUDENT_DB_PASSWORD not set.")
}

try{
    db.createUser(
        {
            user: process.env.GRADEFUL_STUDENT_DB_USER, // "gradeful-admin"
            pwd: process.env.GRADEFUL_STUDENT_DB_PASSWORD,
            roles: [
                {
                    role: "readWrite",
                    db: process.env.GRADEFUL_STUDENT_DB
                }
            ]
        }
      );
      
} catch (error) {
  // Log the error message to the file
  print("Error: " + error);
  print("Writing error to log file: " + logFile);
  try {
    var log = new File(logFile);
    log.open("a");
    log.write(logMessage + "\n");
    log.close();
  } catch (logError) {
    print("Error writing to log file: " + logError);
  }}
db.createCollection(process.env.GRADEFUL_STUDENT_DB); //MongoDB creates the database when you first store data in that database