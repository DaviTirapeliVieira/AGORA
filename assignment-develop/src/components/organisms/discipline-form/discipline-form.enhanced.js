import { connect } from 'react-redux';
import DisciplineForm from './discipline-form.component.jsx';

import { createDisciplineRequest } from '@/logic/discipline/ducks/discipline-create.slice.js';

import { userDetailsSelector } from '@/logic/user/ducks/user-selectors.js';

import { teachersSelector } from '@/logic/teacher/ducks/teacher.selectors.js';

import {
  disciplineCreateLoadingSelector,
  disciplineCreateErrorSelector,
} from '@/logic/discipline/ducks/discipline.selectors.js';

const mapStateToProps = state => ({
  currentUserRole: userDetailsSelector(state)?.role,
  loading: disciplineCreateLoadingSelector(state),
  error: disciplineCreateErrorSelector(state),
  teachers: teachersSelector(state),
});

const mapDispatchToProps = dispatch => ({
  createDiscipline: payload => dispatch(createDisciplineRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisciplineForm);
