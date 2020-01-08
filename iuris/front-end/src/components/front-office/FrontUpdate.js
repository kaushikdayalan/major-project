import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import "../../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css"


const FrontAdd = ()=>(

   <div className="form-allign">
    <Form style={{ backgroundColor: 'white' }}>
        
      <FormGroup>
        <Label for="fileno">File Number</Label>
        
        <Input type="text" name="fileno" id="fileno" placeholder="Enter the File Number" />
      </FormGroup>
      <FormGroup>
        <Label for="consultant">Select Consultant</Label>
        <Input type="select" name="select" id="consultant">
          <option>Sample 1</option>
          <option>Sample 2</option>
          <option>Sample 3</option>
          <option>Sample 4</option>
          <option>Sample 5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="documents">Documents Checked</Label>
        <Input type="textarea" name="documents" id="documents" placeholder="Separate The Documents with Commas ','" />
      </FormGroup>
      <FormGroup>
        <Label for="file">File</Label>
        <Input type="file" name="file" id="file" multiple />
        <FormText color="muted">
          Upload the soft copy of the above mentioned documents.
          Select multiple files by dragging with the cursor or use CTRL to select multiple files.
        </FormText>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          All Documents have been added
        </Label>
      </FormGroup>
      <div class="divfo" >
    <Button color="primary">Submit</Button>
     </div>
    </Form>
    <Link 
									className="btn btn-lg btn-info "
									style={{ marginLeft: '5px', backgroundcolor: '#888888', top: '9px' }}
									to = "/frontoffice-home"
								>back</Link>
    
    </div>
    
  );

export default FrontAdd;