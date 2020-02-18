/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

const Home = () => (
<div class="ui placeholder segment">
  <div class="ui icon header">
    <i aria-hidden="true" class="pdf file outline icon"></i>
    No documents are listed for this customer.
  </div>
  <button class="ui primary button">Add Document</button>
</div>
)

export default Home;