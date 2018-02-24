import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { expect } from 'chai';
import VehicleList from '../src/components/VehicleList';
import VehicleCard from '../src/components/VehicleCard';

describe("VehicleList Tests", function() {
    it('renders without error', (done) => {
        const list = ReactTestUtils.renderIntoDocument(<VehicleList />);
        const renderedDOM = ReactDOM.findDOMNode(list);
        expect(ReactTestUtils.isDOMComponent(renderedDOM)).to.equal(true);
        done();
    });
});
