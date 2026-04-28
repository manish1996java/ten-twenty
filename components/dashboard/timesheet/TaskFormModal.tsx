import { taskValidationSchema } from "@/lib/validations/taskValidationSchema";
import { Form, Formik, FormikValues } from "formik"

const TaskFormModal = ({ setShowModal }: { setShowModal: (val: boolean) => void }) => {

    const onSubmitHandler = (values: FormikValues) => {
        console.log(values);
        setShowModal(false);
    }


    const projectList = ["aasdfas", "asdfsadf", "asfsadfda", "asdfsdafsad"];
    const typeOfWorkList = ["Any Task", "Design", "Development", "Testing"];



    return (
        (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                    <Formik
                        initialValues={{
                            project: '',
                            work: '',
                            hours: '',
                            description: ''
                        }}
                        validationSchema={taskValidationSchema}
                        onSubmit={onSubmitHandler}
                    >
                        {({ handleSubmit, handleBlur, handleChange, touched, errors }) => {
                            return (
                                <Form onSubmit={handleSubmit}>
                                    <div className="flex items-center justify-between mb-5">
                                        <h2 className="text-base font-semibold text-gray-800">Add New Entry</h2>
                                        <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <label className="text-xs font-medium text-gray-700 mb-1 block">Select Project *</label>
                                            <select className="w-full border border-gray-200 text-black rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                                name="project"
                                                onChange={handleBlur}
                                                onBlur={handleChange}
                                            >
                                                {projectList.map((projectName) => {
                                                    return (
                                                        <option key={projectName} value={projectName}>{projectName}</option>
                                                    )
                                                })}
                                            </select>
                                            {touched.project && errors.project && (
                                                <span className="text-xs text-red-500 mt-0.5 block">{errors.project}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-gray-600 mb-1 block">Type of Work *</label>
                                            <select className="w-full border text-black border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                                name="work"
                                                onChange={handleBlur}
                                                onBlur={handleChange}
                                            >
                                                {typeOfWorkList.map((workType) => {
                                                    return (
                                                        <option key={workType} value={workType}>{workType}</option>
                                                    )
                                                })}
                                            </select>
                                            {touched.work && errors.work && (
                                                <span className="text-xs text-red-500 mt-0.5 block">{errors.work}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-gray-600 mb-1 block">Task description *</label>
                                            <textarea placeholder="Write task here..." rows={3} className="w-full text-black border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                                name="description"
                                                onChange={handleBlur}
                                                onBlur={handleChange}
                                            />
                                            {touched.description && errors.description && (
                                                <span className="text-xs text-red-500 mt-0.5 block">{errors.description}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-gray-600 mb-1 block">Hours *</label>
                                            <input type="number" defaultValue={0} className="w-20 text-black border border-gray-200 rounded-md px-2 py-1 text-sm text-center outline-none focus:ring-2 focus:ring-blue-500"
                                                name="hours"
                                                onChange={handleBlur}
                                                onBlur={handleChange}
                                            />
                                            {touched.hours && errors.hours && (
                                                <span className="text-xs text-red-500 mt-0.5 block">{errors.hours}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mt-6">
                                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-md transition">Add Entry</button>
                                        <button onClick={() => setShowModal(false)} className="flex-1 border border-gray-200 text-gray-600 text-sm font-medium py-2 rounded-md hover:bg-gray-50 transition">Cancel</button>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        )
    )
}

export default TaskFormModal