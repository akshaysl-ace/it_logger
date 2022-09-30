import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);

    return (
        !loading && techs !== null && techs.map(t => <option key={t.id} value={`${t.firstname} ${t.lastname}`}>
            {t.firstname} {t.lastname}
        </option>)
    )
}

const mapStateToProps = state => ({
    tech: state.tech
});

TechSelectOptions.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);