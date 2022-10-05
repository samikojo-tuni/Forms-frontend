<script setup>
import EmployeeDataService from '../services/EmployeeDataService';
</script>

<template>
	<div class="row">
		<div class="section">
			<h3>Työntekijät</h3>
			<ul class="list">
				<li class="list-item" :class="{active: index == currentIndex}" v-for="(employee, index) in employees"
					:key="index" @click="setActiveEmployee(employee, index)">
					{{employee.first_name + " " + employee.last_name}}
				</li>
			</ul>
		</div>
		<div class="section">
			<div v-if="currentEmployee">
				<h4>Valittu työntekijä</h4>
				<div>
					<label><strong>Nimi:</strong></label>{{ " " + currentEmployee.first_name + " " + currentEmployee.last_name }}
				</div>
				<div>
					<label><strong>Puhelin:</strong></label>{{ " " + currentEmployee.phone}}
				</div>
			</div>
			<div v-else>
				<p>Valitse työntekijä</p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "employee-list",
	data() {
		return {
			employees: [],
			currentIndex: -1,
			currentEmployee: null
		};
	},
	methods: {
		setActiveEmployee(employee, index) {
			this.currentEmployee = employee;
			this.currentIndex = index;
		},
		refreshList() {
			this.retrieveEmployees();
			this.currentEmployee = null;
			this.currentIndex = -1;
		},
		retrieveEmployees() {
			console.log("Fetch employee data");
			EmployeeDataService.getAll()
				.then(response => {
					this.employees = response.data;
					console.log(this.employees);
				})
				.catch(error => {
					console.log(error);
				});
		},
	},
	mounted() {
		console.log("Haetaan työntekijät");
		this.retrieveEmployees();
	}
}
</script>