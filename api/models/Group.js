module.exports = {
  name: {
    type: 'string',
    required: true
  },
  uids: {
    type: 'array',
    collection: 'host',
    via:'uid'
    required: true
  },
  description: {
    type: 'string'
  },
  createdDate: {
    type: 'date'
  },
  createdBy: {
    type: 'string'
  }
};
