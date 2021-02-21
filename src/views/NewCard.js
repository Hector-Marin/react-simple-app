import React, {Component} from 'react';
import AddForm from '../components/AddForm';
import Card from '../components/Card';

const NewCard = ({form, onChange, onSubmit}) => (
    <div className="row">
        <div className="col-sm">
            <Card {...form}/>
        </div>
        <div className="col-sm">
            <AddForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
            />
        </div>
    </div>
)

export default NewCard;