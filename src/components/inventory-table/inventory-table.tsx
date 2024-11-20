import {
  Box,
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import { mockInventoryData } from '@/mock/data'
import Stack from '@mui/material/Stack'

const InventoryTable = () => {
  const tableHeader = mockInventoryData[0] && Object.keys(mockInventoryData[0])

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: 'black' }}>
            <TableRow>
              {tableHeader.map((header, index) => (
                <TableCell key={index} sx={{ border: '1px solid #232323' }} size={'small'}>
                  {header}
                </TableCell>
              ))}
              <TableCell sx={{ border: '1px solid #232323' }} size={'small'}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockInventoryData.map((row, index) => (
              <TableRow key={index}>
                {tableHeader.map((header, index) => (
                  <TableCell key={index} sx={{ border: '1px solid #232323' }} size={'small'}>
                    {row[header]}
                  </TableCell>
                ))}
                <TableCell sx={{ border: '1px solid #232323' }} size={'small'}>
                  <Button
                    variant={'contained'}
                    color={'primary'}
                    size={'small'}
                    sx={{ marginRight: 1 }}
                  >
                    Edit
                  </Button>
                  <Button variant={'contained'} color={'error'}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} my={3} alignItems={'center'}>
        <Pagination count={10} />
      </Stack>
    </Box>
  )
}

export default InventoryTable
