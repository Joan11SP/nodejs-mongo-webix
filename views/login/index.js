var formCreate=[
  { template: "Crear Cuenta", type: "section" },
  {
    
    cols: [
      {
        rows: [
          { id: 'names',width:250, view: 'text', label: 'Nombres Completos' },
          { id: 'identification',width:250, label: 'Identificación', view: 'text' },
          { id: 'email',width:250, label: 'Correo', view: 'text' }
        ],
      },
      {
        rows: [
          { id: 'reason_socail',width:250, label: 'Razón Social', view: 'text' },
          { id: 'phones',width:250, label: 'Telefonos', view: 'text' },
          { id: 'direcction',width:250, label: 'Direccion', view: 'text' }
        ]
      }
    ]
    
  },
  { id: 'btnAceptar',width:200, label: 'Aceptar', view: 'button' }
]

var create_account = {
  view: "form",
  id: 'create_account',
  width: 600,
  url: function (params) {
    return webix.ajax().post("users/create_account",$$('create_account').getValues())
  },
  datatype: 'json',
  elements: formCreate
}
webix.ready(function () {
  webix.ui({
    cols: [
      create_account
    ]
  })
})

