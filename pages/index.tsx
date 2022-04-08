import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from "react-i18next";
import AppLayout from '../layouts/AppLayout'
import PageHeader from '../components/PageHeader'
import { Table, Tag, Space } from 'antd';
import OrderPost from '../components/OrderPost';
import { Alert } from '../components/Alert/Alert';
import Button from '../components/Button';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { t } from 'i18next';

export function GetListOrder({ setSelectedId }: any) {
  const OrderVariants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.112,
      },
    }),
    hidden: { opacity: 0, y: 9 },
  }
  const OrderItems = [
    {
      id: 1,
      time: '2022-03-07T09:21:53.000000Z',
      title: 'Order #745344446',
      type: 0,
    },
    {
      id: 2,
      time: '2022-02-02T09:21:53.000000Z',
      title: 'Order #996116116',
      type: 2,
    },
    {
      id: 3,
      time: '2021-06-03T09:21:53.000000Z',
      title: 'Order #126846006',
      type: 1,
    },
    {
      id: 4,
      time: '2021-06-03T09:21:53.000000Z',
      title: 'Order #743346006',
      type: 3,
    },
  ]
  return (
    <>
      {OrderItems.map((item: any) => (
        <OrderPost
          key={item.id}
          time={item.time}
          title={item.title}
          id={item.id}
          type={item.type}
          animateVariants={OrderVariants}
          handleClick={() => setSelectedId(item.id)}
        />
      ))}
    </>
  )
}
export function GetSingleOrder({ selectedId, setSelectedId }: any) {
  return (
    <>
      <AnimatePresence>
        {selectedId && (
          <motion.div className='bg-white p-4 show-order' layoutId={selectedId}>
            <div className="page-header">
              <h2 className="title">
                {t('show_order_title')} #126846006
              </h2>
              <motion.button className='flex-just-center btn-close' onClick={() => setSelectedId(null)}>
                <span className="material-icons material-icons-outlined">
                  close
                </span>
              </motion.button>
            </div>
            <div className="show-order-content">
              <div className="row">
                <div className="col-lg-3">
                  <div className="show-order-button">
                    <Button icon='done' handleClick={() => { console.log('Test') }} size='lg' title={t('accept_order_text')} />
                    <Button icon='published_with_changes' handleClick={() => { console.log('Test') }} size='lg' title={t('delay_order_text')} type='blue' />
                    <Button icon='clear' handleClick={() => { console.log('Test') }} size='lg' title={t('cancel_order_text')} type='light' />
                  </div>
                </div>
              </div>
              <motion.h5>
                Lorem ipsum dolor sit amet.
              </motion.h5>
              <motion.h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, voluptas odio reprehenderit nihil architecto commodi, exercitationem dolorem odit hic, et non doloremque! Fugiat veritatis nobis repellat odio nisi vitae qui?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fugit! Facilis quaerat similique illum laborum voluptatibus, cumque asperiores? Cumque, hic velit saepe deleniti ab atque ut sit a voluptas facere.
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const Home: NextPage = () => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState(null)
  return (
    <AppLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GetSingleOrder setSelectedId={setSelectedId} selectedId={selectedId} />
      <main className='bg-white p-4 mt-3' style={{ overflow: 'hidden' }}>
        <Alert type='success'>
          <p className="text">
            <span className="material-icons material-icons-outlined">task_alt</span>
            <strong>{t('lorem_title')}</strong>
            {t('lorem_text')}</p>
        </Alert>
        <div className="row">
          <div className="col-md-4">
            <PageHeader title={t('latest_orders_text')} size='xs' showAllText={t('show_all_text')} link='/orders' />
            <div className="app-panel">
              <div className="app-panel-content is-list">
                <GetListOrder setSelectedId={setSelectedId} selectedId={selectedId} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <PageHeader title={t('latest_products_text')} size='xs' showAllText={t('show_all_text')} link='/orders' />
            <div className="app-panel">
              <div className="app-panel-content is-list">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>{t('product_name_title')}</th>
                      <th>{t('product_price_text')}</th>
                      <th>{t('product_quantity')}</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Capaccino</td>
                      <td>10.55$</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>Pizza</td>
                      <td>32$</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>Milk</td>
                      <td>89.99$</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>Hamberger</td>
                      <td>33.99$</td>
                      <td>2K</td>
                    </tr>
                    <tr>
                      <td>Chokolate</td>
                      <td>12.66$</td>
                      <td>41K</td>
                    </tr>
                    <tr>
                      <td>Others</td>
                      <td>43$</td>
                      <td>59K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="app-panel-colored" style={{ backgroundImage: `url('/background2.jpg')` }}>
              <h3 className="title">{t('categories_count_text')}</h3>
              <h4 className="item-num">
                <strong>{t('main_categories_count_text')}</strong>
                <span className='me-auto'>19</span>
              </h4>
              <h4 className="item-num">
                <strong>{t('sub_categories_count_text')}</strong>
                <span className='me-auto'>543</span>
              </h4>
            </div>
            <div className="app-panel-colored white">
              <h3 className="title">{t('generale_statistic_text')}</h3>
              <h4 className="item-num">
                <strong>{t('branches_count_text')}</strong>
                <span className='me-auto'>19</span>
              </h4>
              <h4 className="item-num">
                <strong>{t('orders_count_text')}</strong>
                <span className='me-auto'>543</span>
              </h4>
              <h4 className="item-num">
                <strong>{t('products_count_text')}</strong>
                <span className='me-auto'>543</span>
              </h4>
            </div>
            <div className="py-2">
              <Link href={'/'}>
                <a className='btn butt-lg butt-primary2 flex-just-center' style={{ flexDirection: 'row' }}>
                  <span className="material-icons material-icons-outlined">assessment</span>
                  {t('see_all_statistic_text')}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <PageHeader title={t('branches_title')} />
        <Table columns={columns} dataSource={data} />
      </main>

    </AppLayout>
  )
}

export default Home
