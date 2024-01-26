import { useCallback, useState } from 'react';
import { StyledTableContainer } from '../../../components/DataTable/DataTable.style';
import {
  PaginationProps,
  TablePagination,
} from '../../../components/DataTable/DataTable.util';
import PlanetsTable from './PlanetsTable';
import { PlanetResponseData } from '../../../core/constants/types';
import SearchInput from '../../../components/SearchInput/SearchInput';

const instialPagination: PaginationProps = {
  count: 0,
  pageSize: 10,
  currentPageIndex: 0,
};
export default function PlanetTableWrapper() {
  const [search, setSearch] = useState<string>();
  const [pagination, setPagination] =
    useState<PaginationProps>(instialPagination);

  const handleDataLoad = useCallback(({ count }: PlanetResponseData) => {
    setPagination((stPagination) => ({ ...stPagination, count }));
  }, []);

  return (
    <StyledTableContainer>
      <SearchInput
        onChangeText={setSearch}
        delayBeforeTriggerChange={500}
        placeHolder='Search by Planet, Terrain, Climate '
      />
      <PlanetsTable onDataLoaded={handleDataLoad} search={search} />
      {!search && <TablePagination {...pagination} />}
    </StyledTableContainer>
  );
}
