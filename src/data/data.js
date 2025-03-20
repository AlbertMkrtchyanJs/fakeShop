import * as YUP from 'yup'

export let data = {
    users: [
        { id: 1, name: "Gago", email: "Gago@gmail.com", password: "1234" },
        { id: 2, name: "Abo", email: "Abo@gmail.com", password: "1234" },
      ],
       validationSchema : YUP.object().shape({
              name : YUP.string().min(3,'Too short!!').max(8,'Too long!!'),
              email: YUP.string().email('Incorrect email!!'),
              password: YUP.string().min(4,'Still short!!')
          })
}

