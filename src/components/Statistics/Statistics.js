import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const Statistics = () => {
    const { data } = useLoaderData()
    return (
        <div>
            <Container>
                <div>
                    <h4 className='fs-3 text-center text-capitalize py-4'>Statistics Of Quiz</h4>
                </div>
                <div className='col-7  mx-auto py-4'>
                    <div style={{ width: '100%', height: 400 }} >
                        <ResponsiveContainer>
                            <BarChart
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Bar dataKey="total" fill="#2b3351" />
                                <XAxis dataKey="name" />
                                <YAxis />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Statistics;