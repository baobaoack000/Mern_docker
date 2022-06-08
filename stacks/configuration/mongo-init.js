let error = false
print("**** Going to start Mongo seed ****")

var admin = db.getSiblingDB("admin")
admin.auth("appsmith", "JLsDuOEFwmX6Z")

let res = [
    db.createUser(
        {
            user: "appsmith",
            pwd: "JLsDuOEFwmX6Z",
            roles: [{
                role: "root",
                db: "admin"
            }, "readWrite"]
        }
    )
]

printjson(res)

if (error) {
  print('Error occurred while inserting the records')
}
