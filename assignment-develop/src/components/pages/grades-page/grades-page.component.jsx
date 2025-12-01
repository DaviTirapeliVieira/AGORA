import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GradeAssignmentTemplate from '@/components/templates/grades-layout/grades-layout.component';
import {
  fetchGradeScreenDataRequest,
  searchGradesRequest,
  updateGradeFilter,
  updateStudentGrade,
  saveGradesRequest,
  resetGradesState,
} from '@/logic/grades/ducks/grades.slice';
import {
  selectGradeFilters,
  selectGradeFilterOptions,
  selectGradeRows,
  selectGradeLoading,
  selectGradeSaving,
  selectGradeError,
} from '@/logic/grades/ducks/grades.selector';

const GradeAssignmentPage = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectGradeFilters);
  const filterOptions = useSelector(selectGradeFilterOptions);
  const rows = useSelector(selectGradeRows);
  const loading = useSelector(selectGradeLoading);
  const saving = useSelector(selectGradeSaving);
  const error = useSelector(selectGradeError);

  useEffect(() => {
    dispatch(fetchGradeScreenDataRequest());

    return () => {
      dispatch(resetGradesState());
    };
  }, [dispatch]);

  const handleChangeFilter = (field, value) => {
    dispatch(updateGradeFilter({ field, value }));
  };

  const handleSearch = () => {
    dispatch(searchGradesRequest());
  };

  const handleChangeConcept = (studentId, field, value) => {
    dispatch(updateStudentGrade({ studentId, field, value }));
  };

  const handleSave = () => {
    dispatch(saveGradesRequest());
  };

  const handleCancel = () => {
    dispatch(searchGradesRequest());
  };

  return (
    <GradeAssignmentTemplate
      filters={filters}
      filterOptions={filterOptions}
      rows={rows}
      onChangeFilter={handleChangeFilter}
      onSearch={handleSearch}
      onChangeConcept={handleChangeConcept}
      onSave={handleSave}
      onCancel={handleCancel}
      loading={loading}
      saving={saving}
      error={error}
    />
  );
};

export default GradeAssignmentPage;
