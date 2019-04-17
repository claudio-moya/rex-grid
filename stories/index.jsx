/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withInspectHtml } from 'storybook-inspecthtml';
import CenterDecorator from '../.storybook/centerDecorator';
import 'rex-core';
import '../src/scss/utilities/stories.scss';

const { Container, Row, Col } =
  process.env.NODE_ENV === 'production'
    ? require('../build/node_modules/rex-grid')
    : require('../src/Grid');

const stories = storiesOf('Grid', module);
stories.addDecorator(withInspectHtml);
stories.addDecorator(CenterDecorator);
stories.addDecorator(checkA11y);
stories.addDecorator(withKnobs);

// Stories
stories.add('Equal-width', () => (
  <Container>
    <Row>
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
));

stories.add('Setting one column width', () => (
  <Container>
    <Row>
      <Col>1 of 3</Col>
      <Col xs="6">2 of 3 (col-6)</Col>
      <Col>3 of 3</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col xs="5">2 of 3 (col-5)</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
));

stories.add('Variable with content', () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col lg="2">1 of 3</Col>
      <Col md={{ size: 'auto' }}>Variable width content</Col>
      <Col lg="2">3 of 3</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col md={{ size: 'auto' }}>Variable width content</Col>
      <Col lg="2">3 of 3</Col>
    </Row>
  </Container>
));

stories.add('Equal-width multi-row', () => (
  <Container>
    <Row>
      <Col>col</Col>
      <Col>col</Col>
      <div className="w-100" />
      <Col>col</Col>
      <Col>col</Col>
    </Row>
  </Container>
));

const stories2 = storiesOf('Responsive classes', module);
stories2.addDecorator(withInspectHtml);
stories2.addDecorator(CenterDecorator);
stories2.addDecorator(checkA11y);
stories2.addDecorator(withKnobs);

stories2.add('All breakpoints', () => (
  <Container>
    <Row>
      <Col>col</Col>
      <Col>col</Col>
      <Col>col</Col>
      <Col>col</Col>
    </Row>
    <Row>
      <Col xs="8">col-8</Col>
      <Col xs="4">col-4</Col>
    </Row>
  </Container>
));

stories2.add('Stacked to horizontal', () => (
  <Container>
    <Row>
      <Col sm="8">col-sm-8</Col>
      <Col sm="4">col-sm-4</Col>
    </Row>
    <Row>
      <Col sm={{ size: '' }}>col-sm</Col>
      <Col sm={{ size: '' }}>col-sm</Col>
      <Col sm={{ size: '' }}>col-sm</Col>
    </Row>
  </Container>
));

stories2.add('Mix and match', () => (
  <Container>
    <Row>
      <Col xs="12" md="8">
        .col-12 .col-md-8
      </Col>
      <Col xs="6" md="4">
        .col-6 .col-md-4
      </Col>
    </Row>

    <Row>
      <Col xs="6" md="4">
        .col-6 .col-md-4
      </Col>
      <Col xs="6" md="4">
        .col-6 .col-md-4
      </Col>
      <Col xs="6" md="4">
        .col-6 .col-md-4
      </Col>
    </Row>

    <Row>
      <Col xs="6">.col-6</Col>
      <Col xs="6">.col-6</Col>
    </Row>
  </Container>
));

const stories3 = storiesOf('Alignment', module);
stories3.addDecorator(withInspectHtml);
stories3.addDecorator(CenterDecorator);
stories3.addDecorator(checkA11y);
stories3.addDecorator(withKnobs);

stories3.add('Vertical alignment', () => (
  <Container className="bd-example-row bd-example-row-flex-cols">
    <Row className="align-items-start">
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
    <Row className="align-items-center">
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
    <Row className="align-items-end">
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
  </Container>
));

stories3.add('Vertical alignment2', () => (
  <Container className="bd-example-row bd-example-row-flex-cols">
    <Row>
      <Col className="align-self-start">One of three columns</Col>
      <Col className="align-self-center">One of three columns</Col>
      <Col className="align-self-end">One of three columns</Col>
    </Row>
  </Container>
));

stories3.add('Horizontal alignment', () => (
  <Container>
    <Row className="justify-content-start">
      <Col xs="4">One of two columns</Col>
      <Col xs="4">One of two columns</Col>
    </Row>
    <Row className="justify-content-center">
      <Col xs="4">One of two columns</Col>
      <Col xs="4">One of two columns</Col>
    </Row>
    <Row className="justify-content-end">
      <Col xs="4">One of two columns</Col>
      <Col xs="4">One of two columns</Col>
    </Row>
    <Row className="justify-content-around">
      <Col xs="4">One of two columns</Col>
      <Col xs="4">One of two columns</Col>
    </Row>
    <Row className="justify-content-between">
      <Col xs="4">One of two columns</Col>
      <Col xs="4">One of two columns</Col>
    </Row>
  </Container>
));

stories3.add('No gutters', () => (
  <Row className="no-gutters">
    <Col xs="12" sm="6" md="8">
      .col-12 .col-sm-6 .col-md-8
    </Col>
    <Col xs="6" md="4">
      .col-6 .col-md-4
    </Col>
  </Row>
));

stories3.add('Column wrapping', () => (
  <Container>
    <Row>
      <Col xs="9">.col-9</Col>
      <Col xs="4">
        .col-4
        <br />
        Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new
        line as one contiguous unit.
      </Col>
      <Col xs="6">
        .col-6
        <br />
        Subsequent columns continue along the new line.
      </Col>
    </Row>
  </Container>
));

stories3.add('Column breaks', () => (
  <Container>
    <Row>
      <Col xs="6" sm="3">
        .col-6 .col-sm-3
      </Col>
      <Col xs="6" sm="3">
        .col-6 .col-sm-3
      </Col>

      {/* Force next columns to break to new line */}
      <div className="w-100" />

      <Col xs="6" sm="3">
        .col-6 .col-sm-3
      </Col>
      <Col xs="6" sm="3">
        .col-6 .col-sm-3
      </Col>
    </Row>
  </Container>
));

stories3.add('Column breaks2', () => (
  <Container>
    <Row>
      <Col xs="6" sm="4">
        .col-6 .col-sm-4
      </Col>
      <Col xs="6" sm="4">
        .col-6 .col-sm-4
      </Col>
      {/* Force next columns to break to new line at md breakpoint and up */}
      <div className="w-100 d-none d-md-block" />

      <Col xs="6" sm="4">
        .col-6 .col-sm-4
      </Col>
      <Col xs="6" sm="4">
        .col-6 .col-sm-4
      </Col>
    </Row>
  </Container>
));

stories3.add('Order classes', () => (
  <Container className="bd-example-row">
    <Row>
      <Col>First, but unordered</Col>
      <Col xs={{ size: '', order: 12 }}>Second, but last</Col>
      <Col xs={{ size: '', order: 1 }}>Third, but first</Col>
    </Row>
  </Container>
));

stories3.add('Order classes2', () => (
  <Container className="bd-example-row">
    <Row>
      <Col xs={{ size: '', order: 'last' }}>First, but last</Col>
      <Col>Second, but unordered</Col>
      <Col xs={{ size: '', offset: 'first' }}>Third, but first</Col>
    </Row>
  </Container>
));

const stories4 = storiesOf('Offset columns', module);
stories4.addDecorator(withInspectHtml);
stories4.addDecorator(CenterDecorator);
stories4.addDecorator(checkA11y);
stories4.addDecorator(withKnobs);

stories4.add('Offset classes', () => (
  <Container>
    <Row>
      <Col md="4">.col-md-4</Col>
      <Col md={{ size: 4, offset: 4 }}>.col-md-4 .offset-md-4</Col>
    </Row>
    <Row>
      <Col md={{ size: 3, offset: 3 }}>.col-md-3 .offset-md-3</Col>
      <Col md={{ size: 3, offset: 3 }}>.col-md-3 .offset-md-3</Col>
    </Row>
    <Row>
      <Col md={{ size: 6, offset: 3 }}>.col-md-6 .offset-md-3</Col>
    </Row>
  </Container>
));

stories4.add('Offset classes2', () => (
  <Container>
    <Row>
      <Col sm="5" md="6">
        .col-sm-5 .col-md-6
      </Col>
      <Col sm={{ size: 5, offset: 2 }} md={{ size: 6, offset: 0 }}>
        .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
      </Col>
    </Row>
    <Row>
      <Col sm="6" md="5" lg="6">
        .col-sm-6 .col-md-5 .col-lg-6
      </Col>
      <Col sm="6" md={{ size: 5, offset: 2 }} lg={{ size: 6, offset: 0 }}>
        .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
      </Col>
    </Row>
  </Container>
));
