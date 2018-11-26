import React from 'react';
import axios from 'axios';

export default axios.create({

  baseURL :'https://api.unsplash.com',
  headers: {
  Authorization :
  'Client-ID 159b5fcbcd817c36c00c88d64d9296207c8f41b272554b429eb8b26e688f546b'
   }
});
