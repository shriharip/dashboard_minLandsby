<template>
  <el-table :data="list" style="padding-top: 15px;">
    <el-table-column label="Users" width="175">
      <template slot-scope="scope">
        {{ scope.row.username  }}
      </template>
    </el-table-column>
    <el-table-column label="Village" width="195" align="center">
      <template slot-scope="scope">
       {{ scope.row.village }}
      </template>
    </el-table-column>
    <el-table-column label="Date" width="150" align="center">
      <template slot-scope="scope">
        <!-- <el-tag :type="row.status | statusFilter">
          {{ row.date }}
        </el-tag> -->
        {{ scope.row.date }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      transactionList().then(response => {
        this.list = response.data.items.slice(0, 8)
      })
    }
  }
}
</script>
