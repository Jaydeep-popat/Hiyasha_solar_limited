// This file is a MongoDB-less fallback for the Contact model
// Used when MongoDB connection is not available

class MemoryContact {
  static contacts = [];
  
  static async create(data) {
    const id = Math.random().toString(36).substring(2, 15);
    const contact = {
      _id: id,
      ...data,
      createdAt: new Date(),
    };
    
    this.contacts.push(contact);
    return contact;
  }
  
  // Add more methods if needed for your app
  static async findAll() {
    return this.contacts;
  }
  
  static async findById(id) {
    return this.contacts.find(contact => contact._id === id);
  }
}

export default MemoryContact;
