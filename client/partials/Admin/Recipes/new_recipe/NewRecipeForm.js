Template.NewRecipeForm.events({
	'change input[type="file"]':function ( event, template ) {
		Modules.client.uploadToAmazonS3( { event: event, template: template } );

	}
});

Template.NewRecipeForm.helpers({
	fileUploaded:function(){
		return Session.get('fileUploaded')
	},
	Recipes:function(){
		return Recipes.find({})
	},
	newSchema:function(){
		var settings = {
			position: 'bottom',
			limit: 5,
			rules: [
				{
					collection: Ingredients,
					field: 'name',
					template: Template.UserPill
				}
			]
		};

		IngredientsSchema = new SimpleSchema({
			
			createdAt: {
				type: Date,
				label: 'Created At',
				autoValue:function(){
					return new Date()
				},
				autoform: {
					type: 'hidden'
				}
			},
			createdBy: {
				type: String,
				label: 'Created By',
				autoValue: function(){
					return this.userId
				},
				autoform: {
					type: 'hidden'
				}
			},
			name: {
				type: String,
				label: 'Name',
				autoform: {
					afFieldInput: {
						type: 'autocomplete-input',
						settings: settings
					}
				}
			},
			type: {
				type: String,
				label: 'Type',
				allowedValues: [
					'volume',
					'weight'
				],
				autoform: {
					options: [
						{
							label: 'Volume',
							value: 'volume'
						},
						{
							label: 'Weight',
							value: 'weight'
						}
					]
				}
			},
			amount: {
				type: Number,
				label: 'Amount'
			},
			measurement: {
				type: String,
				label: 'Measuring Unit'
			},
			aisle: {
				type: String,
				label: 'Aisle'
			}

		});


		derp = new SimpleSchema({
			
			name: {
				type: String,
				label: 'Name'
			},
			createdAt: {
				type: Date,
				label: 'Date',
				autoValue: function(){
					return new Date()
				},
				autoform: {
					type: "hidden"
				}
			},
			author: {
				type: String,
				label: 'Author',
				autoValue: function(){
					return this.userId
				},
				autoform: {
					type: "hidden"
				}
			},
			category: {
				type: String,
				label: 'Category',
				allowedValues: [
					'main-course',
					'breakfast',
					'side',
					'soup-salad',
					'snack',
					'appetizer',
					'dessert',
					'sauce-dressing'
				],
				autoform: {
					options: [
						{
							label: 'Main Course',
							value: 'main-course'
						},
						{
							label: 'Breakfast',
							value: 'breakfast'
						},
						{
							label: 'Side',
							value: 'side'
						},
						{
							label: 'Soup/Salad',
							value: 'soup-salad'
						},
						{
							label: 'Snack',
							value: 'snack'
						},
						{
							label: 'Appetizer',
							value: 'appetizer'
						},
						{
							label: 'Dessert',
							value: 'dessert'
						},
						{
							label: 'Sauce/Dressing',
							value: 'sauce-dressing'
						}
					]
				}
			},
			difficulty: {
				type: String,
				label: 'Difficulty',
				allowedValues: [
					'beginner',
					'intermediate',
					'advanced'
				],
				autoform: {
					options: {
						beginner: 'Beginner',
						intermediate: 'Intermediate',
						advanced: 'Advanced'
					}
				}
			},
			time: {
				type: String,
				label: 'Time to Prepare'
			},
			yield: {
				type: String,
				label: 'Yield'
			},
			img: {
				type: String,
				label: 'Image'
			},
			
			ingredients: {
				type: [IngredientsSchema]
			},
			paleo: {
				type: Boolean,
				label: 'Paleo'
			},
			primal: {
				type: Boolean,
				label: 'Primal'
			},
			keto: {
				type: Boolean,
				label: 'Keto'
			},
			vegan: {
				type: Boolean,
				label: 'Vegan'
			},
			vegetarian: {
				type: Boolean,
				label: 'Vegetarian'
			},
			crockpot: {
				type: Boolean,
				label: 'Crockpot'
			},
			whole30: {
				type: Boolean,
				label: 'Whole 30'
			},
			wahls: {
				type: Boolean,
				label: "Wahl's Protocol"
			},
			under6: {
				type: Boolean,
				label: 'Under 6 Ingredients'
			},
			under400: {
				type: Boolean,
				label: 'Under 400 Calories'
			},
			glutenFree: {
				type: Boolean,
				label: 'Gluten-Free'
			},
			dairyFree: {
				type: Boolean,
				label: 'Dairy-Free'
			},
			instructions: {
				type: String,
				label: 'Instructions',
				autoform: {
					afFieldInput: {
						type: 'textarea'
					}
				}
			},
		});


		return derp
	}
})