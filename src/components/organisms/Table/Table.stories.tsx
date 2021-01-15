import * as React from 'react';

import { Table } from './Table';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Table', 'organisms'),
  component: Table,
};

const data = [
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
];

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    filters: ['desc', 'asc'],
    onFilter: console.log,
  },
  {
    title: 'Description',
    dataIndex: 'desc',
  },
  {
    title: 'Time',
    dataIndex: 'date',
  },
];

export const Regular = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Table</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Regular</div>

        <Table page={1} data={data} columns={columns} />
      </div>
    </div>
  </div>
);

const data2 = [
  { fullname: 'First Last name', id: '1', percent: '2,95%', money: '7375$', paid: '25000$', sold: '50000$' },
  { fullname: 'First Last name', id: '2', percent: '2,95%', money: '7375$', paid: '25000$', sold: '50000$' },
  { fullname: 'First Last name', id: '3', percent: '2,95%', money: '7375$', paid: '25000$', sold: '50000$' },
  { fullname: 'First Last name', id: '4', percent: '2,95%', money: '7375$', paid: '25000$', sold: '50000$' },
  { fullname: 'First Last name', id: '5', percent: '2,95%', money: '7375$', paid: '25000$', sold: '50000$' },
];

const columns2 = [
  {
    title: 'Full name',
    dataIndex: 'fullname',
    filters: ['desc', 'asc'],
    onFilter: console.log,
  },
  {
    title: 'Invoice №',
    dataIndex: 'id',
    filters: ['desc', 'asc'],
    onFilter: console.log,
  },
  {
    title: 'Commission',
    filters: ['desc', 'asc'],
    onFilter: console.log,
    children: [
      {
        title: '%',
        dataIndex: 'percent',
      },
      {
        title: 'Money',
        dataIndex: 'money',
      },
    ],
  },
  {
    title: 'Paid',
    dataIndex: 'paid',
  },
  {
    title: 'Sold',
    dataIndex: 'sold',
  },
];

export const WithHeadChildrens = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Table</div>

      <div className="storybook-row-item">
        <div className="storybook-label">With head childrens</div>

        <Table page={1} data={data2} columns={columns2} />
      </div>
    </div>
  </div>
);
