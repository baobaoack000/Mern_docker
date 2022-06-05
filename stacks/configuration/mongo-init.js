let error = false
print("**** Going to start Mongo seed ****")

var admin = db.getSiblingDB("admin")
admin.auth("appsmith", "VRMRVRh2QxW8Q")

let res = [
    db.createUser(
        {
            user: "appsmith",
            pwd: "VRMRVRh2QxW8Q",
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
