import React, { ReactElement } from 'react'
import PropTypes from "prop-types";
import { motion } from 'framer-motion'

export function FormInput({ name, value, title, handleChange, validationsErrors, isLoading, type = 'text' }: any): ReactElement {
    return (
        <div className="app-form">
            <label className="label-block" htmlFor={`input-${name}`}>{title}</label>
            <input
                type={type}
                id={`input-${name}`}
                name={name}
                disabled={isLoading}
                placeholder={title}
                className={"app-inputs " + (validationsErrors && ' has-error')}
                autoComplete="off"
                onChange={handleChange}
                value={value}
            />
            {validationsErrors &&
                <div style={{ overflow: 'hidden' }}>
                    <motion.div initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="app-form-note form-note-error">
                        <p className="text">{validationsErrors}</p>
                    </motion.div>
                </div>}
        </div>
    )
}

FormInput.propTypes = {
    value: PropTypes.any.isRequired,
    name: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    title: PropTypes.string,
    isLoading: PropTypes.bool,
    type: PropTypes.string,
    validationsErrors: PropTypes.string,
};
export function FormSelect(props: any): ReactElement {
    return (
        <div className="app-form">
            <label className="label-block" htmlFor={`input-${props.name}`}>{props.title}</label>
            <select
                id={`input-${props.name}`}
                name={props.name}
                disabled={props.isLoading}
                className={"app-inputs select " + (props.validationsErrors && ' has-error')}
                onChange={props.handleChange}
                value={props.value}
            >
                <option value=''>{props.title}</option>
                {props.data && props.data.map((item: any, i: number) => (
                    <option key={i} value={item.id}>{item.name_ar}</option>
                ))}
            </select>
            {props.validationsErrors &&
                <div style={{ overflow: 'hidden' }}>
                    <div className="app-form-note form-note-error">
                        <p className="text">{props.validationsErrors}</p>
                    </div>
                </div>}
        </div>
    )
}

FormSelect.propTypes = {
    value: PropTypes.any.isRequired,
    name: PropTypes.string,
    isLoading: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
    title: PropTypes.string,
    validationsErrors: PropTypes.string,
    data: PropTypes.array,
};

export function FormTextarea({ name, value, title, handleChange, validationsErrors, isLoading, minHeight = 150 }: any): ReactElement {
    return (
        <div className="app-form">
            <label className="label-block" htmlFor={`input-${name}`}>{title}</label>
            <textarea
                id={`input-${name}`}
                name={name}
                disabled={isLoading}
                placeholder={title}
                style={{
                    minHeight: minHeight
                }}
                className={"app-inputs " + (validationsErrors && ' has-error')}
                autoComplete="off"
                onChange={handleChange}
                value={value}
            >
                {value}
            </textarea>
            {validationsErrors &&
                <div style={{ overflow: 'hidden' }}>
                    <motion.div initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="app-form-note form-note-error">
                        <p className="text">{validationsErrors}</p>
                    </motion.div>
                </div>}
        </div>
    )
}

FormTextarea.propTypes = {
    value: PropTypes.any.isRequired,
    name: PropTypes.string,
    isLoading: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
    title: PropTypes.string,
    minHeight: PropTypes.number,
    validationsErrors: PropTypes.string,
};