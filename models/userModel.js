const db = require("../firebase");
const usersRef = db.collection("users");

module.exports = {
  create: (data) => usersRef.add(data),
  getAll: async () => {
    const snapshot = await usersRef.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
  getById: (id) => usersRef.doc(id).get(),
  update: (id, data) => usersRef.doc(id).update(data),
  remove: (id) => usersRef.doc(id).delete(),
};

